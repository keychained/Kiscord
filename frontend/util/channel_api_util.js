export const fetchChannels = serverId => (
    $.ajax({
        method: 'GET',
        url: `/api/channels/`,
        data: { serverId }
    })
);

export const fetchChannel = (serverId, channelId) => (
    $.ajax({
        method: 'GET',
        url: `/api/channels/${serverId}/${channelId}`
    })
);

export const createChannel = channel => (
    $.ajax({
        method: 'POST',
        url: '/api/channels/',
        data: { channel }
    })
);

export const deleteChannel = channelId => (
    $.ajax({
        method: 'DELETE',
        url: `/api/channels/${channelId}`
    })
)