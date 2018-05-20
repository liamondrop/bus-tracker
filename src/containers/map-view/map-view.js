
import React, { Component } from 'react';
import { connect } from 'react-redux';
import get from 'lodash/get';
import GoogleMapReact from 'google-map-react';
import { selectVehicles } from '../../reducers/vehicles';

const Marker = (props) => (
  <div className="vehicle">
    <div className="marker-id" style={{ borderColor: props.color }}>{props.id}</div>
    <div className="marker">
      <div className="arrow" style={{ borderTopColor: props.color }} />
    </div>
  </div>
); 

class MapView extends Component {
  render = () => {
    const { center, zoom, vehicles, colors } = this.props;

    return (
      <GoogleMapReact
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {Object.keys(vehicles).map((vehicleId) => {
          const vehicle = get(vehicles, [vehicleId]);
          const vehiclePosition = vehicle.position;
          const routeId = get(vehicle, ['trip', 'route_id']);
          const color = get(colors, [routeId], '#900');

          return (
            <Marker 
              key={vehicleId}
              id={vehicleId}
              lat={vehiclePosition.latitude}
              lng={vehiclePosition.longitude}
              color={color}
            />
          );
        })}
      </GoogleMapReact>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  center: get(state, ['config', 'center']),
  zoom: get(state, ['config', 'zoom']),
  colors: get(state, ['config', 'colors']),
  vehicles: selectVehicles(state)
});

export default connect(mapStateToProps)(MapView);
