import React from "react";

class ChannelAdd extends React.Component {
    constructor(props) {
        super(props);
    }

        componentWillUnmount() {
        this.props.clearChannelErrors();
    }

    render() {
        return (
            <>
            <div >
            <p>Create a Channel</p>
            <p>Your channel is where you and your friends hang out. Make yours and start talking</p>
            <div onClick={ () => this.props.openModal('channelCreate')}>Create My Own</div>
            </div>
            </>
        )
    }
}

export default ChannelAdd;