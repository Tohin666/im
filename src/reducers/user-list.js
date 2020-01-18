const updateUserList = (state, action) => {

    if (state === undefined) {
        return {
            users: [],
            isLogged: true,
            token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ2YXN5YUBtYWlsLnJ1IiwiaWF0IjoxNTc5MTk4NzU5LCJleHAiOjE2MTA3NTYzNTl9.hCG6eIqKZ_djAgRe2f45rbLM4sIhGGbc6ZJafW0MGa0'
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