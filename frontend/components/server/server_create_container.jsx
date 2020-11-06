import ServerCreate from './server_create';
import { connect } from 'react-redux';
import { createServer, receiveServerErrors } from '../../actions/server_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const msp = state => ({
    currentUser: state.entities.users[state.session.id],
    errors: state.errors.server
});

const mdp = dispatch => ({
    createServer: server => dispatch(createServer(server)),
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    clearServerErrors: () => dispatch(receiveServerErrors([]))
});

export default connect(msp, mdp)(ServerCreate);