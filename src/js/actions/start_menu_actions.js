import { 
  CLICK_START_MENU_ITEM,
  CLOSE_START_MENU_WINDOW
} from "../actions/constants";

export function clickStartMenuItem(startMenuItem){
  startMenuItem.showStartMenuWindow = true;
  return {
    type: CLICK_START_MENU_ITEM,
    payload: startMenuItem
  }
}

export function closeStartMenuWindow(startMenuItem){
  startMenuItem.showStartMenuWindow = false;
  return {
    type: CLOSE_START_MENU_WINDOW,
    payload: startMenuItem
  }
}