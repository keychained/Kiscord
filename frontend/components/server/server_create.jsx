import React from 'react';

class ServerCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = { title: `${this.props.currentUser.username}'s Server`, user_id: this.props.currentUser.id, invite_code: Math.random().toString(18).toUpperCase().slice(5) };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

   componentDidMount() {
       this.props.getAllServers();
   }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createServer(this.state);
    };

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        };
    };

    render() {
        if (this.props.errors[0] === "") {
            this.props.closeModal();
        }
        return (
            <>
            <div id="server-add-container">
            <p id="close" onClick={ () => this.props.closeModal()}>X</p>
            <p id="create-server">Customize your server</p>
            <p id="create-info">Give your new server a personality with a unique name. You can always change it later.</p>
            <form id="server-form" onSubmit={this.handleSubmit}>
                <label id="server-name">SERVER NAME
                    <input id="server-name2" type="text"
                    value={this.state.title}
                    onChange={this.update('title')}
                    />
                </label>
                <p id="server-errors">{this.props.errors}</p>
                <div id="back-create">
                <p onClick={ () => this.props.openModal('serverAdd')} id="back">Back</p>
                <input id="create" type="submit" value="Create"/>
                </div>
            </form>
            </div>
            </>
        )
    }
}

export default ServerCreate;