import React from 'react';

class Message extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: "",
            user_id: this.props.currentUser.id,
            channel_id: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    componentDidMount() {
        this.props.getMessages();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.channel_id !== this.props.match.params.channel_id) {
        this.props.getMessages();
        }
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        };
    };

    handleSubmit(e) {
        e.preventDefault();
        this.props.createMessage(this.state);
        this.setState({ body: ""})
    };


    render() {
        const { channels, channelsList, messages, currentUser } = this.props
        if (!channelsList.length) return null;
        const last = window.location.href.substr(window.location.href.lastIndexOf('/') + 1)
        const channelId = parseInt(last)
        this.state.channel_id = channelId
        const channelTitle = channels[last].title
        const messagesFiltered = messages.filter(message => message.channel_id === channelId)
        const allMessages = messagesFiltered.map(message => (
            <div id="messages" key={message.id}><div id="messages-user">{currentUser.username}<div id="messages-date">{new Date(message.created_at).toLocaleDateString('en-US')}<div id="messages-time">at {new Date(message.created_at).toLocaleTimeString('en-US')}</div></div></div>{message.body}</div>
        ))
        return(
            <div id="message-bar">
            <div id="message-container">
            <div id="message-channel-title"><div id="message-sign">#</div>{channelTitle}
            </div>
                <div id="message-window">{allMessages}</div>
                <form onSubmit={this.handleSubmit}>
                 <input 
                    id="message-input"
                    type="text"
                    placeholder="Message"
                    value={this.state.body}
                    onChange={this.update('body')}
                    autoComplete="off"
                 />
                 <input
                    type="hidden"
                    value={this.state.channel_id}
                    onChange={this.update('channel_id')}
                 />
                </form>
            </div>
            </div>
        )
    }
}

export default Message;