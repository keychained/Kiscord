import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import ServerAddContainer from '../server/server_add_container';
import ServerCreateContainer from '../server/server_create_container';
import ChannelCreateContainer from '../channel/channel_create_container';
import ServerCodeContainer from '../server/server_code_container';
import ServerJoinContainer from '../server/server_join_container';
import ServerLeaveContainer from '../server/server_leave_container';
import ServerDeleteContainer from '../server/server_delete_container';

function Modal( {modal, closeModal }) {
    if (!modal) {
        return null;
    }

    let component;
    switch (modal) {
        case "serverAdd":
            component = <ServerAddContainer />;
            break;
        case "serverCreate":
            component = <ServerCreateContainer />;
            break;
        case "channelCreate":
            component = <ChannelCreateContainer />;
            break;
        case "inviteCode":
            component = <ServerCodeContainer />;
            break;
        case "serverJoin":
            component = <ServerJoinContainer />;
            break;
        case "serverLeave":
            component = <ServerLeaveContainer />;
            break;
        case "serverDelete":
            component = <ServerDeleteContainer />;
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