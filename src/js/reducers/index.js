import { combineReducers } from 'redux';
import Icon from './icon_reducer';
import StartMenu from './start_menu_reducer';

const rootReducer = combineReducers({
  icon: Icon,
  startMenu: StartMenu
});

export default rootReducer;