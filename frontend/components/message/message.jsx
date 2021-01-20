import React from 'react';

class Message extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { channels, channelsList } = this.props
        if (!channelsList.length) return null;
        const last = window.location.href.substr(window.location.href.lastIndexOf('/') + 1)
        const channelTitle = channels[last].title
        return(
            <div id="message-bar">
            <div id="message-container">
            <div id="message-channel-title"><div>#</div>{channelTitle}
            </div>
                <div id="message-window"></div>
                <input id="message-input"></input>
            </div>
            </div>
        )
    }
}

export default Message;