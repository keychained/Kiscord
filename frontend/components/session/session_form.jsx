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
        this.handleDemo = this.handleDemo.bind(this)
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

    handleDemo(e) {
        e.preventDefault();
        this.props.demo()
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
            <div id='form-parent'>
                <img id='form-logo' src={window.logo}></img>
                <img id='login-background' src={window.backgroundLogin}></img>
                <div id='form-parent-container'>
                    <div id='form-container'>
                        <form id='form-session' onSubmit={this.handleSubmit}>
                            <div id='label-error2'>
                            {this.props.errors.length === 1 ? (
                                ""
                            ) : (
                                <>
                                {this.displayErrors()}
                                </>
                            )}
                            </div>
                            {this.props.formType === 'Welcome back!' ? (
                                    <h1 id='welcome'>
                                        {this.props.formType}
                                        <p id='welcome-msg'>We're so excited to see you again!</p>
                                    </h1>
                            ) : (
                                    <h1 id='welcome'>{this.props.formType}</h1>
                            )}
                            <label id='label'>EMAIL
                                <div id='label-error'>
                                {this.props.errors.length === 1 ? (
                                    <>
                                    {this.displayErrors()}
                                    </>
                                ) : (
                                    ""
                                )}
                                </div>
                                <input type='text'
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                    />
                            </label>
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
                                <label id='label'>PASSWORD
                                <div id='label-error'>
                                {this.props.errors.length === 1 ? (
                                    <>
                                    {this.displayErrors()}
                                    </>
                                ) : (
                                    ""
                                )}
                                </div>
                                <input type='password'
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                />
                            </label>
                            {this.props.formType === 'Create an account' ? (
                                <label id='label'>DATE OF BIRTH
                                <input type='date'></input>
                                </label>              
                            ) : (
                                ""
                            )}
                            <div id='login-btns'>
                            {this.props.formType === 'Create an account' ? (
                                <input id='login-btn2' type='submit' value='Continue' />
                            ) : (
                                <>
                                <input id='login-btn2' type='submit' value='Login'/>
                                <button id='login-btn-demo' onClick={this.handleDemo}>Demo Login</button>
                                </>
                            )}
                            </div>
                            {this.props.formType === 'Welcome back!' ? (
                                <div id='register1'>
                                    <label>Need an account?
                                    <Link id='register-login1' to='/register'>Register</Link>
                                    </label>
                                </div>
                            ) : (
                                <div id ='register2'>
                                <Link id='register-login2' to='/login'>Already have an account?</Link>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        )
    }
};

export default SessionForm;

