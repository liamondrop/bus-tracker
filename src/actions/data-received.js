import constants from '../constants';

const dataReceived = (payload) => ({
  type: constants.DATA_RECEIVED,
  payload
});

export {
  dataReceived
};
