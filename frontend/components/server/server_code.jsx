import React from 'react';

class ServerCode extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        const { servers } = this.props
        const last = window.location.href.substr(window.location.href.lastIndexOf('/') + 1)
        const secondLast = window.location.href.substr(window.location.href.lastIndexOf('/', window.location.href.lastIndexOf('/', window.location.href.lastIndexOf('/') - 1)) + 1).split('/')[0]
        const secondId = parseInt(secondLast)
        const serverId = parseInt(last)
        const final = Number.isInteger(serverId) && Number.isInteger(secondId) ? secondLast : Number.isInteger(serverId) || Number.isInteger(secondId) ? last : ""
        const inviteCode = servers[final]
        return (
            <>
            <div id="channel-create-container">
            <p id="close" onClick={ () => this.props.closeModal()}>X</p>
            <p id="create-channel">Invite Code</p>
            <p id="create-info2">Save the code below and send it to a friend to join your server!</p>
            <input id="invite" readOnly value={inviteCode.invite_code}></input>
            </div>
            </>
        )
    }
}

export default ServerCode;