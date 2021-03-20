
import { DATA_LOADED } from "../actions/Types";


export function getData() {
    return function(dispatch) {
      return fetch("https://api.mocki.io/v1/af37df01")
        .then(response => response.json())
        .then(json => {
          dispatch({ type: DATA_LOADED, payload: json });
        });
    };
  }

