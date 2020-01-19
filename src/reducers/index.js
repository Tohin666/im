import updateUserList from './user-list';
import updateProcessList from './process-list';

const reducer = (state, action) => {

    return {
        userList: updateUserList(state, action),        
        processList: updateProcessList(state, action),        
    }
};

export default reducer;