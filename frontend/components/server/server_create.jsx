import React from 'react';

class ServerCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = { title: `${this.props.currentUser.username}'s Server`, userId: this.props.currentUser.id };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // componentWillUnmount() {
    //     this.props.clearServerErrors();
    // }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createServer(this.state);
        // this.props.createServer(this.state) ? this.props.openModal('serverCreate') : this.props.closeModal() ;
        this.props.errors.length === 0 ? "" : this.props.closeModal();
    };

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        };
    };

    render() {
        return (
            <>
            <p>Customize your server</p>
            <p>Give your new server a personality with a unique name. You can always change it later.</p>
            <form onSubmit={this.handleSubmit}>
                <label>Server Name
                    <input type="text"
                    placeholder="Server name here"
                    value={this.state.title}
                    onChange={this.update('title')}
                    />
                </label>
                {/* <p>{this.props.errors}</p> */}
                <input type="submit" value="Create"/>
            </form>
            </>
        )
    }
}

export default ServerCreate;