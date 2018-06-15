export const ADD_USER = 'ADD_USER';
export const FETCH_USERS = 'FETCH_USERS';

export function createUser(userObj) {// this is an action creator
    return {
        type:ADD_USER,
        userObj
    }
}

export function getUserData() {
    return dispatch => {
        fetch('http://localhost:8081/getdata')
        .then(response => response.json())
        .then(respJSON => {
            dispatch({
                type:FETCH_USERS,
                payload:respJSON
            })
        });
    }
}