import React from 'react';

class Message extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: "",
            user_id: this.props.currentUser.id,
            channel_id: null
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
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
    };



    render() {
        const { channels, channelsList, messages } = this.props
        if (!channelsList.length) return null;
        const last = window.location.href.substr(window.location.href.lastIndexOf('/') + 1)
        this.state.channel_id = last
        const channelTitle = channels[last].title
        return(
            <div id="message-bar">
            <div id="message-container">
            <div id="message-channel-title"><div>#</div>{channelTitle}
            </div>
                <div id="message-window">{messages}</div>
                <form onSubmit={this.handleSubmit}>
                 <input 
                    id="message-input"
                    type="text"
                    placeholder="  Message"
                    value={this.state.body}
                    onChange={this.update('body')}
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