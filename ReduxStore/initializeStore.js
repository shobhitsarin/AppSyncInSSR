import { combineReducers, createStore, applyMiddleware } from "redux";
import { homePageReducer } from "../ReduxStore/homePage/homePage.reducer";
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'

let store;

export const initializeStore = (initialState,options) => {
    const sagaMiddleware = createSagaMiddleware();
        const AppReducers = combineReducers({
            homePageReducer
        });
        const rootReducer = (state,action) => {
            return AppReducers(state,action);
        }
        store = createStore(rootReducer,initialState,applyMiddleware(sagaMiddleware));
        store.sagaTask = sagaMiddleware.run(rootSaga);
    return store;
}