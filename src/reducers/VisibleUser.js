
const initialState = () => {
    const userName = window.localStorage.userName;
    const role = window.localStorage.role;

    return {
        name: userName,
        role: role,
        loggedIn: Boolean(userName),
    };
};

const visibleUser = ( state = initialState(), action ) => {
    switch ( action.type ) {
        default:
            return state;
    }
};

export default visibleUser;
