const usersRequested = (newUsers) => {
    return {
        type: 'FETCH_USERS',
        payload: newUsers          
    };
};

export const userAdded = (userId) => {
    return {
        type: 'USER_ADDED',
        payload: userId
    };
};

const fetchUsers = (graphqlService, dispatch) => () => {
    dispatch(usersRequested());
    graphqlService.getUsers()
        .then((data) => dispatch(usersRequested(data)));
};

export {
    fetchUsers
};