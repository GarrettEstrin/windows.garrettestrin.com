import { 
  CLICK_ICON, 
  CLOSE_ICON_WINDOW, 
  CLICK_APPLICATION_ICON,
  CLOSE_APPLICATION_WINDOW 
} from '../actions/constants';

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

export function clickApplicationIcon(application) {
  application.showApplicationWindow = true;
  return {
    type: CLICK_APPLICATION_ICON,
    payload: application
  }
}

export function closeApplicationWindow(application) {
  application.showApplicationWindow = false;
  return {
    type: CLOSE_APPLICATION_WINDOW,
    payload: application
  }
}