import React from 'react';

class Message extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getAllChannels(this.props.match.params.server_id)
    }

   componentDidUpdate(prevProps, prevState) {
       if (prevProps.match.params.channel_id !== this.props.match.params.channel_id) {
        this.props.getAllChannels(this.props.match.params.server_id);
       };
   }

    render() {
        const { channels } = this.props
        if (!channels.length) return null;
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