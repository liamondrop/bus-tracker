import constants from '../constants';
import get from 'lodash/get'; 
import pick from 'lodash/pick';

const initialState = {};

const vehicles = (state = initialState, action) => {
  switch (action.type) {
    case constants.DATA_RECEIVED:
      const newState = {};
      action.payload.forEach((message) => {
        const entity = get(message, ['entity', 0]);
        newState[entity.id] = entity.vehicle;
      });

      return {
        ...state,
        ...newState
      };
    default:
      return state;
  }
}

export function selectVehicles(state) {
  const selectedRoute = state.selectedRoute;
  const vehicles = state.vehicles;
  if (!selectedRoute) {
    return vehicles;
  }
  const routeVehicles = get(state, ['routes', selectedRoute, 'vehicles']);
  return pick(vehicles, Object.keys(routeVehicles));
}

export default vehicles;
