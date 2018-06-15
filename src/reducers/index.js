import {ADD_USER, FETCH_USERS} from '../actions/index';

const initialAppState = {
    users : []
};

var appReducer = (state = initialAppState, action) => {
    switch(action.type) {
        case ADD_USER:
            var newstate = {
                ...state
            };
            newstate.users.push(action.userObj);
            return newstate;
        break;
        case FETCH_USERS:
            return {
                users : action.payload
            };
        break;
        default:
            return state;
        break
    }
    return state;
}

export default appReducer;