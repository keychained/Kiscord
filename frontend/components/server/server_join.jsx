import React from 'react';

class ServerJoin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            invite_code: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillUnmount() {
       this.props.clearServerErrors();
    }

    
    handleChange(type) {
      return e => {
          this.setState({ [type]: e.target.value })
      }
    }

    handleSubmit(e) {
        e.preventDefault();
        const server = Object.assign({}, this.state)
        this.props.joinServer(server).then(() => this.props.closeModal(e))
    }

    render() {

        return (
            <>
            <div id="channel-create-container">
                <p id="close" onClick={ () => this.props.closeModal()}>X</p>
                <p id="create-channel">Join Server</p>
                <p id="create-info2">Enter your invite code below and join the server!</p>
                <form onSubmit={ this.handleSubmit }>
                <p id="server-errors">{this.props.errors}</p>
                <div id="enter-code">
                 <input id="channel-name2" placeholder="Enter code here" onChange={this.handleChange('inviteCode')}></input>
                   <div>
                      <button>Join</button>
                   </div>
                </div>
                </form>
            </div>
            </>
        )
    }
}

export default ServerJoin;