import constants from '../constants';

const toggleSelectedRoute = (route) => {
  return ({
    type: constants.TOGGLE_SELECTED_ROUTE,
    payload: route
  });
}

export {
  toggleSelectedRoute
};
