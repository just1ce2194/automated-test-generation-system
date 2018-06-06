export const logOut = () => {
    localStorage.removeItem('userName');
    localStorage.removeItem('role');
    window.location.href = '/login';
};

export const logIn = ( username, password ) => {
    return ( dispatch ) => {
        // TODO : send request to server
        const response = {
            authenticated: true,
            user: {
                name: 'Denys',
                role: 'admin',
            },
        };

        if ( response.authenticated ) {
            window.localStorage.setItem( 'userName', response.user.name );
            window.localStorage.setItem( 'role', response.user.role );
            window.location.href = '/dashboard';
            // TODO: redirect to dashboard
        }
    };
};
