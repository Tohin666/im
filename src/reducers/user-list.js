const updateUserList = (state, action) => {

    if (state === undefined) {
        return {
            users: [],
            isLogged: true,
            token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ2YXN5YUBtYWlsLnJ1IiwiaWF0IjoxNTc5NDcwNDY2LCJleHAiOjE2MTEwMjgwNjZ9.Ad1TCXhBF6jW-aapnojiQxSfgUSh5HVR8qbUnSkjrHQ'
        };
    }

    switch (action.type) {

        case 'FETCH_USERS':
            return {
                ...state.userList,
                users: action.payload
            };

        case 'USER_ADDED':
            return {
                ...state.userList,
                users: action.payload
            };

        default:
            return state.userList;
    }
};

export default updateUserList;