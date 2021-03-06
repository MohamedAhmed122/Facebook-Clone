
import {
    createStore,
    applyMiddleware
} from 'redux';
import {persistStore} from 'redux-persist'


import RootReducer from './Root-Reducer'
import logger from 'redux-logger';

const middlware = [logger];

export const store = createStore(RootReducer, applyMiddleware(...middlware));

export const persistor  = persistStore(store)
