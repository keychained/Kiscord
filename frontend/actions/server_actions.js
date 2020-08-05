import * as ServerAPI from '../util/server_api_util';

export const RECEIVE_ALL_SERVERS = 'RECEIVE_ALL_SERVERS';
export const RECEIVE_SERVER = 'RECEIVE_SERVER';
export const REMOVE_SERVER = 'REMOVE_SERVER';
export const RECEIVE_SERVER_ERRORS = 'RECEIVE_SERVER_ERRORS';
export const CLEAR_SERVER_ERRORS = 'CLEAR_SERVER_ERRORS';

const receiveAllServers = servers => ({
    type: RECEIVE_ALL_SERVERS,
    servers
});

const receiveServer = server => ({
    type: RECEIVE_SERVER,
    server
});

const removeServer = serverId => ({
    type: REMOVE_SERVER,
    serverId
})

export const receiveServerErrors = errors => ({
    type: RECEIVE_SERVER_ERRORS,
    errors
});

export const clearServerErrors = () => ({
    type: CLEAR_SERVER_ERRORS
})

export const fetchServers = () => dispatch => (
    ServerAPI.fetchServers().then(servers => dispatch(receiveAllServers(servers))).fail((errors => dispatch(receiveServerErrors(errors.responseJSON))))
);

export const fetchServer = serverId => dispatch (
    ServerAPI.fetchServer(serverId).then(server => dispatch(receiveServer(server))).fail((errors => dispatch(receiveServerErrors(errors.responseJSON))))
);

export const createServer = server => dispatch (
    ServerAPI.createServer(server).then(server => dispatch(receiveServer(server))).fail((errors => dispatch(receiveServerErrors(errors.responseJSON))))
);

export const deleteServer = serverId => dispatch (
    ServerAPI.deleteServer(serverId).then(() => dispatch(removeServer(serverId))).fail((errors => dispatch(receiveServerErrors(errors.responseJSON))))
);