
const initialState = () => {
    const username = window.localStorage.username;
    const role = window.localStorage.role;
    const login = window.localStorage.login;
    const password = window.localStorage.password;

    return {
        name: username,
        role: role,
        loggedIn: Boolean(username),
        login: login,
        password: password,
    };
};

const visibleUser = ( state = initialState(), action ) => {
    switch ( action.type ) {
        default:
            return state;
    }
};

export default visibleUser;
