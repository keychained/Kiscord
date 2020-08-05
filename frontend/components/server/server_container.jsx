import { connect } from 'react-redux';
import Server from './server';
import { fetchServers, fetchServer } from '../../actions/server_actions';
import { signout } from '../../actions/session_actions';

const msp = state => ({
    servers: Object.values(state.entities.servers),
    currentUser: state.entities.users[state.session.id]
});

const mdp = dispatch => ({
    getAllServers: () => dispatch(fetchServers()),
    getServer: serverId => dispatch(fetchServer(serverId)),
    signout: () => dispatch(signout())
});

export default connect(msp, mdp)(Server);