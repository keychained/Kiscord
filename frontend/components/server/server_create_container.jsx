import ServerCreate from './server_create';
// import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createServer, receiveServerErrors, fetchServers } from '../../actions/server_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const msp = state => ({
    currentUser: state.entities.users[state.session.id],
    errors: state.errors.server,
    servers: Object.values(state.entities.servers),
});

const mdp = dispatch => ({
    getAllServers: () => dispatch(fetchServers()),
    createServer: server => dispatch(createServer(server)),
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    clearServerErrors: () => dispatch(receiveServerErrors([]))
});

export default connect(msp, mdp)(ServerCreate);