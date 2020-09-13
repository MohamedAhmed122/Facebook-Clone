import {
    combineReducers
} from 'redux';
import AuthReducer from './Auth/Auth.Reducer'

const rootReducer = combineReducers({
  auth: AuthReducer
})
export default rootReducer