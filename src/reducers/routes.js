import constants from '../constants';
import get from 'lodash/get';
import merge from 'lodash/merge';

const initialState = {};

const routes = (state = initialState, action) => {
  switch (action.type) {
    case constants.DATA_RECEIVED:
      const newState = {};
      action.payload.forEach((message) => {
        const entity = get(message, ['entity', 0]);
        const routeId = get(entity, ['vehicle', 'trip', 'route_id']);

        if (routeId == null) return;

        const routeName = `Route ${routeId}`;
        const route = get(newState, [routeId], {});
        const vehicles = { ...route.vehicles, ...{ [entity.id]: true } };

        newState[routeId] = {
          ...route,
          ...{
            id: routeId,
            name: routeName,
            vehicles
          }
        };
      });

      return {
        ...state,
        ...merge(state, newState)
      };
    default:
      return state;
  }
}

export const selectTotalVehiclesOnRoute = (state, routeId) => {
  const vehicles = get(state, ['routes', routeId, 'vehicles'], {});
  return Object.keys(vehicles).length;
};

export default routes;

