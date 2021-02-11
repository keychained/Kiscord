export const fetchMessages = () => (
    $.ajax({
        method: 'GET',
        url: '/api/messages'
    })
);

export const createMessage = message => (
    $.ajax({
        method: 'POST',
        url: '/api/messages',
        data: message
    })
)