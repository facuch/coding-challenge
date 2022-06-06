import { combineReducers } from 'redux';
import crypto from '../reducers/cryptoReducer';


export default combineReducers({
    crypto:crypto
})