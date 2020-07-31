export const signUp = user => (
    $.ajax({
        method: 'POST',
        url: '/api/users',
        data: { user }
    })
);

export const signIn = user => (
    $.ajax({
        method: 'POST',
        url: '/api/session',
        data: { user }
    })
);

export const signOut = () => (
    $.ajax({
        method: 'DELETE',
        url: '/api/session'
    })
);

export const demoUser = () => (
    $.ajax({
        method: 'POST',
        url: '/api/session',
        data: { user: {
            username: 'demodemo', email: 'demodemo', password: 'password'
        }}
    })
);