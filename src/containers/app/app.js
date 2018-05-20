import React, { Component } from 'react';
import {connect} from 'react-redux';
import {get} from 'lodash';
import MapView from '../map-view/map-view';
import RoutesTable from '../routes-table/routes-table';
import initializeRTM from '../../rtm/initialize-rtm-sdk';
import { dataReceived } from '../../actions/data-received';

class App extends Component {
  componentWillMount() {
    initializeRTM(this.props.dataReceived);
  }

  render = () => (
    <div className="app">
      <div className="routes">
        <h1>{this.props.title}</h1>
        <RoutesTable />
      </div>

      <div className="map">
        <MapView />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  title: get(state, ['config', 'title']),
});

const mapDispatchToProps = {
  dataReceived
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
