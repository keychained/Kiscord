import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            email: '',
            password: '',
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        };
    };

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state)
    };

    displayErrors() {
        return (
            <ul>
                {this.props.errors.map((error, idx) => (
                    <li key={`error-${idx}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    };



    render() {

        return (
            <div id='form-container'>
            <form onSubmit={this.handleSubmit}>
                {this.displayErrors()}
                {this.props.formType === 'Welcome back!' ? (
                        <h1 id='welcome'>
                            {this.props.formType}
                            <br></br>
                            <br></br>
                            <p id='welcome-msg'>We're so excited to see you again!</p>
                        </h1>
                ) : (
                        <h1 id='welcome'>{this.props.formType}</h1>
                )}
                    <br></br>
                    <label id='label'>EMAIL
                    <input type='text'
                        value={this.state.email}
                        onChange={this.update('email')}
                        />
                </label>
                    <br></br>
                {this.props.formType === 'Create an account' ? (
                    <label id='label'>USERNAME
                    <input type='text'
                        value={this.state.username}
                        onChange={this.update('username')}
                    />
                </label>
                ) : (
                    ""
                )}
                    <br></br>
                    <label id='label'>PASSWORD
                    <input type='password'
                        value={this.state.password}
                        onChange={this.update('password')}
                    />
                </label>
                    <br></br>
                {this.props.formType === 'Create an account' ? (
                    <label id='label'>DATE OF BIRTH
                        <br></br>
                            <input type='date'></input>
                    </label>              
                ) : (
                    ""
                )}
                    <br></br>
                {this.props.formType === 'Create an account' ? (
                    <input id='label' type='submit' value='Continue' />
                ) : (
                    <input id='label' type='submit' value='Login' />
                )}
                    <br></br>
                {this.props.formType === 'Welcome back!' ? (
                    <label id='label'>Need an account?
                    <Link id='label' to='/signup'>Register</Link>
                    </label>
                ) : (
                    <Link id='label' to='/login'>Already have an account?</Link>
                )}
            </form>
            </div>
        )
    }
};

export default SessionForm;

