import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducer as homeReducer} from '../containers/Home/store';
import clientAxios from '../client/request'
import serverAxios from '../server/request';
import {reducer as headerReducer } from '../components/Header/store'

const reducer = combineReducers({
    home: homeReducer,
    header: headerReducer
})

export const getStore = () => {
    // 改变服务器端的store的内容，一定要使用serverAxios
    return createStore(reducer, applyMiddleware(thunk.withExtraArgument(serverAxios)));
}

export const getClientStore = () => {
    // 改变客户端的store的内容，一定要使用clientAxios
    const defaultState = window.context.state;
    return createStore(reducer, defaultState, applyMiddleware(thunk.withExtraArgument(clientAxios)));
}
