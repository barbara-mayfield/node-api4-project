import { combineReducers } from 'redux';
import commentReducer from './commentReducer';
import postReducer from './postReducer';

export default combineReducers({
    postReducer,
    commentReducer
})