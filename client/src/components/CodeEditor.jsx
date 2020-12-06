import React from 'react';

function CodeEditor() {
  return(
    <div id="editor">		
      <textarea id="codearea" name="codearea" rows="40" cols="50" >
      </textarea>
      <br/>  
      <form id="editor-form">	
        <label for="save">Save file: </label>
        <button class="btn btn-primary" type="submit" id="save">Save</button>
      </form>
      <br/>
      <form id="editor-open">
        <label for="open-button">Open file: </label>
        <button class="btn btn-info" type="submit" id="open-button">Open</button>				
      </form>        
    </div>    
  )
}

export default CodeEditor;