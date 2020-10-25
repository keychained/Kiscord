import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import ServerAddContainer from '../server/server_add_container';

function Modal( {modal, closeModal }) {
    if (!modal) {
        return null;
    }

    let component;
    switch (modal) {
        case "serverAdd":
            component = <ServerAddContainer />;
            break;
        default:
            return null;
    }

    return (
        <div id="modal-background" onClick={closeModal}>
            <div id="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const msp = state => ({
    modal: state.ui.modal
});

const mdp = dispatch => ({
    closeModal: () => dispatch(closeModal())
});

export default connect(msp, mdp)(Modal);