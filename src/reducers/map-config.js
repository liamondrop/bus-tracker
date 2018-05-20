import randomColor from 'randomcolor';

const colors = randomColor({
  luminosity: 'random',
  hue: 'random',
  count: 300
});

const mapConfig = () => ({
  colors,
  title: 'Portland TriMet',
  center: {
    lat: 45.5231,
    lng: -122.6765
  },
  zoom: 12
});

export default mapConfig;
