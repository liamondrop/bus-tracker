import RTM from 'satori-rtm-sdk';
import constants from '../constants';

const { RTM_APP_KEY, RTM_CHANNEL, RTM_ENDPOINT, RTM_LOCALE } = constants;

function initializeRTMClient(dispatchData) {
  const client = new RTM(RTM_ENDPOINT, RTM_APP_KEY);

  client.on('enter-connected', function() {
    console.log('Connected to Satori RTM!');
  });

  const subscription = client.subscribe(
    RTM_CHANNEL,
    RTM.SubscriptionMode.SIMPLE
  );

  subscription.on('rtm/subscription/data', pdu => {
    const data = pdu.body.messages.filter(
      message => message.header['user-data'] === RTM_LOCALE
    );

    if (data.length > 0) {
      dispatchData(data);
    }
  });

  client.start();
}

export default initializeRTMClient;
