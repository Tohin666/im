export const userAdded = (userId) => {
    return {
        type: 'USER_ADDED',
        payload: userId
    };
};

const usersRequested = (newUsers) => {
    return {
        type: 'FETCH_USERS',
        payload: newUsers
    };
};
const fetchUsers = (graphqlService, dispatch) => () => {
    dispatch(usersRequested());
    graphqlService.getUsers()
        .then((data) => dispatch(usersRequested(data)));
};

const processListRequested = (newProcessList) => {
    return {
        type: 'FETCH_PROCESS_LIST',
        payload: newProcessList
    };
};
const fetchProcessList = (graphqlService, dispatch) => () => {
    dispatch(processListRequested());
    graphqlService.getProcessList()
        .then((data) => dispatch(processListRequested(data)));
};


export {
    fetchUsers, fetchProcessList
};