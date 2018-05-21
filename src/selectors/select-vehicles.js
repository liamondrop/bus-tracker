import get from 'lodash/get';
import pick from 'lodash/pick';

export default function selectVehicles(state) {
  const selectedRoute = state.selectedRoute;
  const vehicles = state.vehicles;
  if (!selectedRoute) {
    return vehicles;
  }
  const routeVehicles = get(state, ['routes', selectedRoute, 'vehicles']);
  return pick(vehicles, Object.keys(routeVehicles));
}
