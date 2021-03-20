import { DATA_LOADED } from "../actions/Types";

const initialState = {
  items: [],
};

function rootReducer(state = initialState, action) {
 
  if (action.type === DATA_LOADED) {
    return Object.assign({}, state, {
        
        items: state.items.concat(action.payload)
        
    });
  }
  
  
  return state;
  
}

export default rootReducer;