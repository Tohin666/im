const updateProcessList = (state, action) => {

    if (state === undefined) {
        return {
            processes: []            
        };
    }

    switch (action.type) {

        case 'FETCH_PROCESS_LIST':
            return {
                ...state.processList,
                processes: action.payload
            };

        default:
            return state.processList;
    }
};

export default updateProcessList;