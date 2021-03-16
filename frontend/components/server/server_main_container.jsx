import { connect } from 'react-redux';
import ServerMain from './server_main';
import { openModal } from '../../actions/modal_actions'
import { fetchServers, fetchServer } from '../../actions/server_actions';
import { fetchUsers } from '../../actions/user_actions';
import { signout } from '../../actions/session_actions';

const msp = state => ({
    errors: state.errors.server,
    servers: Object.values(state.entities.servers),
    serversTitle: state.entities.servers,
    currentUser: state.entities.users[state.session.id]
});

const mdp = dispatch => ({
    getAllUsers: () => dispatch(fetchUsers()),
    getAllServers: () => dispatch(fetchServers()),
    getServer: serverId => dispatch(fetchServer(serverId)),
    signout: () => dispatch(signout()),
    openModal: (modal) => dispatch(openModal(modal))
});

export default connect(msp, mdp)(ServerMain);