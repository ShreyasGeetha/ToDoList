import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger'
//import rootReducer from './rootReducer'
import todoListReducer from './todoList/todoListReducer'
import { devToolsEnhancer } from 'redux-devtools-extension';

const store = createStore(todoListReducer,devToolsEnhancer(
  // Specify custom devTools options
));

export default store