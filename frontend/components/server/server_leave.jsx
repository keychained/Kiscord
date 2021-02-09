import React from 'react';
import { withRouter } from 'react-router';

class ServerLeave extends React.Component {
    constructor(props) {
        super(props);
    };

    componentWillUnmount() {
        this.props.clearErrors();
    }

    leaveServer(e) {
         e.preventDefault();
         this.props.leaveServer(parseInt(window.location.href.substr(window.location.href.lastIndexOf('/') + 1)))
         .then(() => this.props.closeModal(e))
         this.props.history.push('/channels/@me')
    }

    render() {
        const last = window.location.href.substr(window.location.href.lastIndexOf('/') + 1)
        const secondLast = window.location.href.substr(window.location.href.lastIndexOf('/', window.location.href.lastIndexOf('/', window.location.href.lastIndexOf('/') - 1)) + 1).split('/')[0]
        const secondId = parseInt(secondLast)
        const serverId = parseInt(last)
        const final = Number.isInteger(serverId) && Number.isInteger(secondId) ? secondLast : Number.isInteger(serverId) || Number.isInteger(secondId) ? last : ""
        return (
            <>
            <div id="channel-create-container">
            <p id="close" onClick={ () => this.props.closeModal()}>X</p>
            <p id="create-channel">Leave Server</p>
            <p id="create-info2">Are you sure you want to leave the server?</p>
            <p id="server-errors">{this.props.errors}</p>
                <div id="code-back-join">
                    <p onClick={ () => this.props.closeModal()} id="code-back">Cancel</p>
                    <input onClick={(e) => this.leaveServer(e)} id="code-join" type="submit" value="Leave"/>
                </div>    
            </div>
            </>
        )
    }
}

export default withRouter(ServerLeave);