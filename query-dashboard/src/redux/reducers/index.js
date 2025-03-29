// filepath: c:\Users\Prashant Rana\Desktop\New folder\query-dashboard\src\redux\reducers\index.js
import { combineReducers } from 'redux';
import queryReducer from './queryReducer';

const rootReducer = combineReducers({
  query: queryReducer,
});

export default rootReducer;