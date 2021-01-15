import React from 'react';

class Message extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div id="message-container">
                <div id="message-channel-title">
                </div>
                <div id="message-window"></div>
                <input id="message-input"></input>
            </div>
        )
    }
}

export default Message;