import { combineReducers } from 'redux';
import vehicles from './vehicles';
import routes from './routes';
import selectedRoute from './selected-route';
import mapConfig from './map-config';

export default combineReducers({
  selectedRoute,
  vehicles,
  routes,
  config: mapConfig
});
