import { 
  STORE_WELCOME_MESSAGE
} from "../actions/constants";

export function storeWelcomeMessage(message){
  return {
    type: STORE_WELCOME_MESSAGE,
    payload: message
  }
}