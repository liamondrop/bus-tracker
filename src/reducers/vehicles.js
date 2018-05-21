import constants from '../constants';
import get from 'lodash/get';

const initialState = {};

const vehicles = (state = initialState, action) => {
  switch (action.type) {
    case constants.DATA_RECEIVED:
      const newState = {};
      action.payload.forEach(message => {
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
};

export default vehicles;
