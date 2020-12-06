
const socket = io('http://localhost:3000')
const messageContainer = document.getElementById('message-container')
const messageForm = document.getElementById('send-container')
const messageInput = document.getElementById('message-input')
const editorForm = document.getElementById('editor-form')
const editorOpenForm = document.getElementById('editor-open')
const openFileInput = document.getElementById('open-File')

const editor = CodeMirror.fromTextArea(document.getElementById('codearea'), {
    lineNumbers: true,
    mode: "javascript",
    theme: "base16-dark",
    autoCloseTags: true, 
    autofocus: true
  });
editor.setSize(850,550);


editor.on("keyup", function (cm, event) {
  const content = editor.getValue();
  socket.emit('editor-update-send', content);
  
});

socket.on('editor-update-receive', content => {
  editor.getDoc().setValue(content);
})

const name = prompt('What is your name?')
appendMessage('You joined')
socket.emit('new-user', name)

socket.emit('new-user-editor-data-req')

socket.on('new-user-editor-data-res', (data)=>{
  editor.getDoc().setValue(data);
})


socket.on('chat-message', data => {
  appendMessage(`${data.name}: ${data.message}`)
})

socket.on('user-connected', name => {
  appendMessage(`${name} connected`)
})

socket.on('user-disconnected', name => {
  appendMessage(`${name} disconnected`)
})

messageForm.addEventListener('submit', e => {
  e.preventDefault()
  const message = messageInput.value
  appendMessage(`You: ${message}`)
  socket.emit('send-chat-message', message)
  messageInput.value = ''
})

function appendMessage(message) {
  const messageElement = document.createElement('div')
  messageElement.innerText = message
  messageContainer.append(messageElement)
}


editorForm.addEventListener('submit', e => {
  e.preventDefault()
  const content = editor.getValue()
  const fileName = prompt('Name for the file')
  socket.emit('editor-save', content, fileName)
})

editorOpenForm.addEventListener('submit', e => {
  e.preventDefault()
  const requiredFile = prompt('Name for the file to be opened')
  socket.emit('open-file-request', requiredFile)
})


socket.on('open-file-respond', content => {
  editor.getDoc().setValue(content);
})

socket.on('open-file-respond-broadcast', content => {
  editor.getDoc().setValue(content);
})