import axios from 'axios'
import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE
} from './cardTypes'

export const fetchUsers = () => {
    return async (dispatch) => {
        dispatch(fetchUsersRequest())
        await axios
            .get('https://nut-case.s3.amazonaws.com/coursessc.json')
            .then(response => {
                // response.data is the users
                const users = response.data
                dispatch(fetchUsersSuccess(users))

            })
            .catch(error => {
                // error.message is the error message
                dispatch(fetchUsersFailure(error.message))
            })
    }
}

export const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

export const fetchUsersSuccess = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

export const fetchUsersFailure = error => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}
