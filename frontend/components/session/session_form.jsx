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
            <form onSubmit={this.handleSubmit}>
                {this.displayErrors()}
                {this.props.formType === 'Welcome back!' ? (
                        <h1>
                            {this.props.formType}
                            <p>We're so excited to see you again!</p>
                        </h1>
                ) : (
                            <h1>{this.props.formType}</h1>
                )}
                <label>Username
                    <input type='text'
                        value={this.state.username}
                        onChange={this.update('username')}
                        />
                </label>

                {this.props.formType === 'Create an account' ? (
                <label>Email
                    <input type='text'
                        value={this.state.email}
                        onChange={this.update('email')}
                    />
                </label>
                ) : (
                    ""
                )}
                <label>Password
                    <input type='password'
                        value={this.state.password}
                        onChange={this.update('password')}
                    />
                </label>
                {this.props.formType === 'Create an account' ? (
                    <input type='submit' value='Continue' />
                ) : (
                    <input type='submit' value='Login' />
                )}

                {this.props.formType === 'Welcome back!' ? (
                    <label>Need an account?
                    <Link to='/signup'>Register</Link>
                    </label>
                ) : (
                    <Link to='/login'>Already have an account?</Link>
                )}
            </form>

        )
    }
};

export default SessionForm;

