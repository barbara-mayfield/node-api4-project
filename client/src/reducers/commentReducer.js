import { commentConstants } from '../actions/types';

export const initialState = {
    comments: []
}

export default function commentReducer(state = initialState, action) {
    switch(action.type) {
        default: 
            return state;
    }
}