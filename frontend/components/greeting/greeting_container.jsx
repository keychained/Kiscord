import { connect } from 'react-redux';
import Greeting from './greeting';
import { signin, signout } from '../../actions/session_actions';

const msp = state => ({
    currentUser: state.entities.users[state.session.id]
});

const mdp = dispatch => ({
    signin: user => dispatch(signin(user)),
    signout: () => dispatch(signout())
});

export default connect(msp, mdp)(Greeting);