import { combineReducers } from "redux";
import authReducer from './auth'
import currentUserReducer from './currentUser'
import questionsReducers from './questions'
import usersReducer from './users'

export default combineReducers({
    authReducer, currentUserReducer, questionsReducers, usersReducer
})