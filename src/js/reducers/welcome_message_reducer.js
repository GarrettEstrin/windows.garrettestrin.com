import { 
  STORE_WELCOME_MESSAGE
} from "../actions/constants";

export default function(state = [], action){
  switch (action.type) {
    case STORE_WELCOME_MESSAGE:
      return action.payload;
  }
  return state;
}