export const fetchServers = () => (
    $.ajax({
        method: 'GET',
        url: '/api/servers'
    })
);

export const fetchServer = serverId => (
    $.ajax({
        method: 'GET',
        url: `/api/servers/${serverId}`
    })
);

export const joinServers = inviteCode => (
    $.ajax({
    method: 'POST',
    url: 'api/servers/join',
    data: inviteCode
  })
);

export const leaveServers = serverId => (
    $.ajax({
    method: 'DELETE',
    url: 'api/servers',
    data: { serverId }
  })
);

export const createServer = server => (
    $.ajax({
        method: 'POST',
        url: '/api/servers',
        data: { server }
    })
);

export const deleteServer = serverId => (
    $.ajax({
        method: 'DELETE',
        url: `/api/servers/${serverId}`
    })
)