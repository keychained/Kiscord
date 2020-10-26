import React from "react";

class ServerAdd extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
            <p>Create a Server</p>
            <p>Your server is where you and your friends hang out. Make yours and start talking</p>
            <button onClick={ () => this.props.openModal('serverCreate')}>Create My Own</button>
            </>
        )
    }
}

export default ServerAdd;