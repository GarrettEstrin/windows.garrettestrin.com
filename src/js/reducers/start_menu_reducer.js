import { 
  CLICK_START_MENU_ITEM,
  CLOSE_START_MENU_WINDOW
} from "../actions/constants";

export default function(state = [], action){
  switch (action.type) {
    case CLICK_START_MENU_ITEM:
      return action.payload;
    case CLOSE_START_MENU_WINDOW:
      return action.payload;
  }
  return state;
}