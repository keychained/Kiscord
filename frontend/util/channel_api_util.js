export const fetchChannels = serverId => (
    $.ajax({
        method: 'GET',
        url: `/api/channels`,
        data: { serverId }
    })
);

export const fetchChannel = channelId => (
    $.ajax({
        method: 'GET',
        url: `/api/channels/${channelId}`
    })
);

export const createChannel = (serverId, title) => (
    $.ajax({
        method: 'POST',
        url: `/api/channels`,
        data: { channel: {title: title, server_id: serverId} }
    })
);

export const deleteChannel = channelId => (
    $.ajax({
        method: 'DELETE',
        url: `/api/channels/${channelId}`
    })
)