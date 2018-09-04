import { 
  CLICK_ICON, 
  CLOSE_ICON_WINDOW, 
  CLICK_APPLICATION_ICON,
  CLOSE_APPLICATION_WINDOW
 } from "../actions/constants";

export default function(state = [], action){
  switch (action.type) {
    case CLICK_ICON:
      return action.payload;
    case CLOSE_ICON_WINDOW:
      return action.payload;
    case CLICK_APPLICATION_ICON:
      return action.payload;
    case CLOSE_APPLICATION_WINDOW:
      return action.payload;
  }
  return state;
}