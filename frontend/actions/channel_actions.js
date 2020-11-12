import * as ChannelAPI from '../util/channel_api_util';

export const RECEIVE_ALL_CHANNELS = 'RECEIVE_ALL_CHANNELS';
export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';
export const REMOVE_CHANNEL = 'REMOVE_CHANNEL';
export const RECEIVE_CHANNEL_ERRORS = 'RECEIVE_CHANNEL_ERRORS';
export const CLEAR_CHANNEL_ERRORS = 'CLEAR_CHANNEL_ERRORS';

const receiveAllChannels = channels => ({
    type: RECEIVE_ALL_CHANNELS,
    channels
});

const receiveChannel = channel => ({
    type: RECEIVE_CHANNEL,
    channel
});

const removeChannel = channel => ({
    type: REMOVE_CHANNEL,
    channel
})

export const receiveChannelErrors = errors => ({
    type: RECEIVE_CHANNEL_ERRORS,
    errors
});

export const clearChannelErrors = () => ({
    type: CLEAR_CHANNEL_ERRORS
})

export const fetchChannels = serverId => dispatch => (
    ChannelAPI.fetchChannels(serverId).then(channels => dispatch(receiveAllChannels(channels))).fail((errors => dispatch(receiveChannelErrors(errors.responseJSON))))
);

export const fetchChannel = channelId => dispatch => (
    ChannelAPI.fetchChannel(channelId).then(channel => dispatch(receiveChannel(channel))).fail((errors => dispatch(receiveChannelErrors(errors.responseJSON))))
);

export const createChannel = channel => dispatch => (
    ChannelAPI.createChannel(channel).then(channel => dispatch(receiveChannel(channel))).fail((errors => dispatch(receiveChannelErrors(errors.responseJSON))))
);

export const deleteServer = channelId => dispatch => (
    ChannelAPI.deleteChannel(channelId).then(() => dispatch(removeChannel(channelId))).fail((errors => dispatch(receiveChannelErrors(errors.responseJSON))))
);