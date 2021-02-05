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
                 <input placeholder="Enter code here" onChange={this.handleChange('inviteCode')}></input>
                 <p>{this.props.errors}</p>
                   <div>
                      <button>Join</button>
                   </div>
                </form>
            </div>
            </>
        )
    }
}

export default ServerJoin;