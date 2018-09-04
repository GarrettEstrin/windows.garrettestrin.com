import { combineReducers } from 'redux';
import Icon from './icon_reducer';
import StartMenu from './start_menu_reducer';
import WelcomeMessage from './welcome_message_reducer';

const rootReducer = combineReducers({
  icon: Icon,
  startMenu: StartMenu,
  welcomeMessage: WelcomeMessage
});

export default rootReducer;