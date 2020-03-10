import {createStore, compose, combineReducers} from 'redux';
import members from './members';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducer = combineReducers({
  members
});
const store = createStore(reducer, composeEnhancers());

store.subscribe(() => store.getState());

export {
  store
}
