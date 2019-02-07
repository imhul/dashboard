import { combineReducers } from 'redux';
import ui from './ui';

const reducers = {
  ui,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;