import React from 'react';

class ChannelCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = { title: "", serverId: "" };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createChannel(this.state);
    };

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        };
    };

    render() {
    const last = window.location.href.substr(window.location.href.lastIndexOf('/') + 1)
    const secondLast = window.location.href.substr(window.location.href.lastIndexOf('/', window.location.href.lastIndexOf('/', window.location.href.lastIndexOf('/') - 1)) + 1).split('/')[0]
    const secondId = parseInt(secondLast)
    const serverId = parseInt(last)
        return (
            <>
            <p>Customize your channel</p>
            <p>Give your new channel a personality with a unique name. You can always change it later.</p>
            <form onSubmit={this.handleSubmit}>
                <label>Channel Name
                    <input type="text"
                    value={this.state.title}
                    onChange={this.update('title')}
                    />
                </label>
                    <input type="text"
                    value={Number.isInteger(serverId) && Number.isInteger(secondId) ? secondId : Number.isInteger(serverId) || Number.isInteger(secondId) ? serverId : ""}
                    onChange={this.update('serverId')}
                    />
                <p>{this.props.errors}</p>
                <input type="submit" value="Create"/>
            </form>
            </>
        )
    }
}

export default ChannelCreate;