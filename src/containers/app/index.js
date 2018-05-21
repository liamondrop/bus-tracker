import React, { Component } from 'react';
import { connect } from 'react-redux';
import get from 'lodash/get';
import Map from '../map';
import Routes from '../routes';
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
        <Routes />
      </div>

      <div className="map">
        <Map />
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  title: get(state, ['config', 'title'])
});

const mapDispatchToProps = {
  dataReceived
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
