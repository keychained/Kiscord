import React from "react";

class ServerAdd extends React.Component {
    constructor(props) {
        super(props);
    }

        componentWillUnmount() {
        this.props.clearServerErrors();
    }

    render() {
        return (
            <>
            <div id="server-add-container">
            <p id="close" onClick={ () => this.props.closeModal()}>X</p>
            <p id="create-server">Create a Server</p>
            <p id="create-info">Your server is where you and your friends hang out. Make yours and start talking.</p>
            <div id="create" onClick={ () => this.props.openModal('serverCreate')}>Create My Own</div>
            </div>
            </>
        )
    }
}

export default ServerAdd;