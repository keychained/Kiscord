import React from 'react';

class MessageMain extends React.Component {
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
        // this.props.getAllUsers();
        this.scrollToBottom();
        this.props.getMessages();
        // if (!App.cable.subscriptions.subscriptions[1]) {
        App.test = App.cable.subscriptions.create(
            {
                channel: "MessagesChannel", channel_id: window.location.href.substr(window.location.href.lastIndexOf('/') + 1) },
                {
                    received: message => {
                        this.props.createMessage(message)
                    },
                    speak: function(message) {
                        return this.perform("speak", message)
                    }
                }
        );
            // } else {
            //     App.cable.subscriptions.subscriptions[0].unsubscribe();
            //     // delete test;
            // }
            // }
        // } else if (App.cable.subscriptions.subscriptions[1]) {
        //     App.test.unsubscribe();
        // }
    }

    componentDidUpdate(prevProps, prevState) {
        this.scrollToBottom();
        if (prevProps.match.params.channel_id !== this.props.match.params.channel_id) {
            this.props.getMessages();
            App.cable.subscriptions.create({
                channel: "MessagesChannel", channel_id: window.location.href.substr(window.location.href.lastIndexOf('/') + 1)
            },
            {
                received: message => {
                    this.props.createMessage(message)
                },
                speak: function(message) {
                    return this.perform("speak", message)
                }
            })
            App.cable.subscriptions.subscriptions[0].unsubscribe();
        } else if (App.cable.subscriptions.subscriptions.length === 2) {
            App.cable.subscriptions.subscriptions[0].unsubscribe();
        }
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        };
    };

    handleSubmit(e) {
        e.preventDefault();
        // this.props.createMessage(this.state);
        // if (App.cable.subscriptions.subscriptions[1]) {
        // App.cable.subscriptions.subscriptions[1].unsubscribe();
        // } else {
        const channelId = window.location.href.substr(window.location.href.lastIndexOf('/') + 1)
        App.cable.subscriptions.subscriptions.find(sub => sub.identifier === `{"channel":"MessagesChannel","channel_id":"${channelId}"}`).speak({
        body: this.state.body,
        userId: this.state.user_id,
        channelId: this.state.channel_id
      });
        this.setState({ body: ""})
    };

    scrollToBottom() {
        if (this.messagesEnd) {
        this.messagesEnd.scrollIntoView();
        }
    }

    render() {
        const { channels, channelsList, messages, currentUsername } = this.props
        if (!channelsList.length) return null;
        const last = window.location.href.substr(window.location.href.lastIndexOf('/') + 1)
        const channelId = parseInt(last)
        this.state.channel_id = channelId
        const channelTitle = channels[last].title
        const messagesFiltered = messages.filter(message => message.channel_id === channelId)
        const allMessages = messagesFiltered.map(message => (
            
            <div id="messages" key={message.id}><div id="messages-user">{currentUsername[message.user_id].username}<div id="messages-date">{new Date(message.created_at).toLocaleDateString('en-US')}<div id="messages-time">at {new Date(message.created_at).toLocaleTimeString('en-US')}</div></div></div>{message.body}</div>
        ))
        return(
            <div id="message-bar">
            <div id="message-container">
            <div id="message-channel-title"><div id="message-sign">#</div>{channelTitle}
            </div>
                <div id="message-window">{allMessages}
                    <div style={{ float:"left", clear: "both" }}
                          ref={(el) =>  (this.messagesEnd = el)}>
                    </div>
                </div>
                <form onSubmit={this.handleSubmit}>
                 <input 
                    id="message-input"
                    type="text"
                    placeholder={`Message #${channelTitle}`}
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

export default MessageMain;