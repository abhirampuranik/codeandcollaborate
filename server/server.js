const app = require('express')();
var path = require('path');
const server = require('http').createServer(app);
const options = { cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }};
const io = require('socket.io')(server, options);
var mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/code", {useUnifiedTopology: true,  useNewUrlParser: true });

const codeSchema = new mongoose.Schema({
  filename: String,
  data: String,
  savedby: String
});

const File = mongoose.model("File", codeSchema);

const users = {}
var editordata = "";

io.on('connection', socket => {
  socket.on('new-user', name => {
    users[socket.id] = name
    socket.broadcast.emit('user-connected', name)
  })
  socket.on('send-chat-message', message => {
    socket.broadcast.emit('chat-message', { message: message, name: users[socket.id] })
  })
  socket.on('disconnect', () => {
    socket.broadcast.emit('user-disconnected', users[socket.id])
    delete users[socket.id] 
  })

  socket.on('editor-update-send', content => {
    editordata = content;
    socket.broadcast.emit('editor-update-receive', content);
  })

  io.to(socket.id).emit('new-user-editor-data-res', editordata)

  socket.on('editor-save', (content,fileName) => {
    File.find({filename : fileName},(err, file)=>{
      if(err){
        console.log(err)
      }else if(file.length == 0){
        console.log('saving..');
        const file = new File({
          filename: fileName,
          data: content,
          savedby: users[socket.id]
        })
        file.save()
      }else{
        console.log('updating..')
        File.updateOne({ filename: fileName }, { data: content }, (err)=>{
          if(err){
            console.log(err);
          }
        });
        File.updateOne({ filename: fileName }, { savedby: users[socket.id] }, (err)=>{
          if(err){
            console.log(err);
          }
        });
      };
    })
  });

  socket.on('open-file-request', requiredFile => {
    console.log("Opening file")
    File.find((err, file)=>{
      if(err){
        console.log(err)
      }else{
        file.forEach((doc)=>{
          if(requiredFile === doc.filename){
            var content = doc.data;
            socket.emit('open-file-respond', content); 
            socket.broadcast.emit('open-file-respond-broadcast', content)
          }
        })
      }
    })
  });

  socket.on('new-user-editor-data-req', ()=>{
    socket.emit('new-user-editor-data-res', editordata)
  })

});

server.listen(3000, ()=>{
  console.log("socket.io server running on 3000")
});  



