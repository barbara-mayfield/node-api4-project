import { postConstants } from '../actions/types';

export const initialState = {
    posts: [],
    post: {}
}

export default function postReducer(state = initialState, action) {
    switch(action.type) {
        case postConstants.FETCH_ALL_REQUEST: 
            return {
                ...state
            }
        case postConstants.FETCH_ALL_SUCCESS:
            return {
                ...state,
                posts: action.payload
            }
        case postConstants.FETCH_ALL_FAILURE:
            return {
                ...state,
                error: 'Failed to fetch users!'
            }
        default: 
            return state;
    }
}