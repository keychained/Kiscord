import React from 'react';
import { withRouter } from 'react-router';

class ServerDelete extends React.Component {
    constructor(props) {
        super(props);
    };

    componentWillUnmount() {
        this.props.clearErrors();
    }

    deleteServer(e) {
         e.preventDefault();
         this.props.deleteServer(parseInt(window.location.href.substr(window.location.href.lastIndexOf('/') + 1)))
         .then(() => this.props.closeModal(e))
         this.props.history.push('/channels/@me')
    }

    render() {
        return (
            <>
            <div id="channel-create-container">
            <p id="close" onClick={ () => this.props.closeModal()}>X</p>
            <p id="create-channel">Delete Server</p>
            <p id="create-info2">Are you sure you want to delete the server?</p>
            <p id="server-errors">{this.props.errors}</p>
                <div id="code-back-join">
                    <p onClick={ () => this.props.closeModal()} id="code-back">Cancel</p>
                    <input onClick={(e) => this.deleteServer(e)} id="code-join" type="submit" value="Leave"/>
                </div>    
            </div>
            </>
        )
    }
}

export default withRouter(ServerDelete);