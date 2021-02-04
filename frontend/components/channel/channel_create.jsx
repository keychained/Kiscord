import React from 'react';

class ChannelCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = { title: "", server_id: "" };
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleSubmit(e) {
        e.preventDefault();
        this.props.createChannel(this.state);
    };

    componentWillUnmount() {
        this.props.clearChannelErrors();
    }

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
        const final = Number.isInteger(serverId) && Number.isInteger(secondId) ? secondLast : Number.isInteger(serverId) || Number.isInteger(secondId) ? last : ""
        this.state.server_id = final;
        if (this.props.errors[0] === "") {
            this.props.closeModal();
        }
        return (
            <>
            <div id="channel-create-container">
            <p id="close" onClick={ () => this.props.closeModal()}>X</p>
            <p id="create-channel">Create Text Channel</p>
            <p id="create-info2">Give your new channel a personality with a unique name. You can always change it later.</p>
            <form id="channel-form" onSubmit={this.handleSubmit}>
                <p id="channel-creation">#</p>
                <label id="channel-name">CHANNEL NAME
                    <input id="channel-name2" type="text"
                    placeholder="new-channel"
                    value={this.state.title}
                    onChange={this.update('title')}
                    />
                </label>
                    <input type="hidden"
                    value={this.state.server_id}
                    onChange={this.update('server_id')}
                    />
                <p id="server-errors">{this.props.errors}</p>
                <div id="back-create-channel">
                <p onClick={ () => this.props.closeModal()} id="back-channel">Cancel</p>
                <input id="create-chan" type="submit" value="Create Channel"/>
                </div>
            </form>
            </div>
            </>
        )
    }
}

export default ChannelCreate;