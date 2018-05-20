import constants from '../constants';

const initialState = null;

const selectedRoute = (state = initialState, action) => {
  switch (action.type) {
    case constants.TOGGLE_SELECTED_ROUTE:
      if (state === action.payload) {
        return initialState;
      }
      return action.payload;
    default:
      return state;
  }
}

export default selectedRoute;
