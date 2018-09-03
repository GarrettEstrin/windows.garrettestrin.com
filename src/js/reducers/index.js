import { combineReducers } from 'redux';
import Icon from './icon_reducer';

const rootReducer = combineReducers({
  icon: Icon
});

export default rootReducer;