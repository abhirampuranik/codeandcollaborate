import React from 'react';

function Chat(){
    return(
        <div id="chat-part">
			<p id="chathead">Chat</p>
			<div id="message-container"></div>
			<form id="send-container" autocomplete="off">
				<div id="inputs">
					<input type="text" id="message-input"/>
					<button type="submit" id="send-button">Send</button>
				</div>
			</form>
        </div>
    )
}

export default Chat;