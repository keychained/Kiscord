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
            <div >
            <p>Create a Server</p>
            <p>Your server is where you and your friends hang out. Make yours and start talking</p>
            <div onClick={ () => this.props.openModal('serverCreate')}>Create My Own</div>
            </div>
            </>
        )
    }
}

export default ServerAdd;