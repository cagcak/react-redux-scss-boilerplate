import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './reducers'

const middlewares = [thunk]

export default createStore(rootReducer, applyMiddleware(...middlewares))
