import { postConstants } from './types';
import axios from 'axios';

export const getAll = () => dispatch => {
    dispatch({ type: postConstants.FETCH_ALL_REQUEST });
    axios.get('http://127.0.0.1:8080/api/posts/')
        .then(res => {
            dispatch({ type: postConstants.FETCH_ALL_SUCCESS,
                        payload: res.data })
        })
        .catch(err => {
            dispatch({ type: postConstants.FETCH_ALL_FAILURE })
        })
}