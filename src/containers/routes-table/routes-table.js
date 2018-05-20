import React from 'react';
import { connect } from 'react-redux';
import RoutesRow from './routes-row';

const RoutesTable = ({ routes }) => (
  <div className="routes-table">
    <div className="row row-header">
      <div className="route-name">Route Name</div>
      <div className="total-vehicles"># Vehicles</div>
    </div>
    {Object.keys(routes).map((routeId) => (
      <RoutesRow
        key={routeId}
        id={routeId}
        route={routes[routeId]}
      />
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  routes: state.routes,
});

export default connect(mapStateToProps)(RoutesTable);
