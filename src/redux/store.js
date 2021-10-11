import { createStore,combineReducers,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { getDetailsReducer } from './reducers/reducers';

const middleware = [thunk];

const reducer = combineReducers({
    getDetails: getDetailsReducer
});

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
);


export default store;