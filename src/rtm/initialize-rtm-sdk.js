import RTM from 'satori-rtm-sdk';

const RTM_ENDPOINT = "wss://open-data.api.satori.com";
const APP_KEY = "36b5259FAddd1c7B768c19Ddea606Dcf";
const CHANNEL = "transportation";
const LOCALE = "trimet";

function initializeRTMClient(dispatchData) {
  const client = new RTM(RTM_ENDPOINT, APP_KEY);

  client.on('enter-connected', function () {
    console.log('Connected to Satori RTM!');
  });

  const subscription = client.subscribe(CHANNEL, RTM.SubscriptionMode.SIMPLE);

  subscription.on('rtm/subscription/data', (pdu) => {
    const data = pdu.body.messages.filter(
      (message) => message.header['user-data'] === LOCALE
    );

    if (data.length > 0) {
      dispatchData(data);
    }
  });

  client.start();
}

export default initializeRTMClient;
