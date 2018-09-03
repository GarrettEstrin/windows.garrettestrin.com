import { CLICK_ICON, CLOSE_ICON_WINDOW } from '../actions/constants';

export function clickIcon(icon) {
  icon.showWindow = true;
  return {
    type: CLICK_ICON,
    payload: icon
  }
}

export function closeIconWindow(icon) {
  icon.showWindow = false;
  return {
    type: CLOSE_ICON_WINDOW,
    payload: icon
  }
}