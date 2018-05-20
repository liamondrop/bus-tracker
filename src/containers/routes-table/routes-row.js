import React, { Component } from 'react';
import { connect } from 'react-redux';
import get from 'lodash/get';
import { selectTotalVehiclesOnRoute } from '../../reducers/routes';
import { toggleSelectedRoute } from '../../actions/toggle-selected-row';

class RoutesRow extends Component {
  handleClick = () => {
    this.props.toggleSelectedRoute(this.props.id);
  };

  render() {
    const { id, isActive, route, totalVehicles, colors } = this.props;
    const className = `row${isActive ? ' row-active' : ''}`;
    const color = get(colors, [id], '#900');

    return (
      <div className={className} onClick={this.handleClick}>
        <div className="route-color" style={{ backgroundColor: color }} />
        <div className="route-name">{route.name}</div>
        <div className="total-vehicles">{totalVehicles}</div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  totalVehicles: selectTotalVehiclesOnRoute(state, ownProps.id),
  isActive: state.selectedRoute === ownProps.id,
  colors: get(state, ['config', 'colors']),
});

const mapDispatchToProps = {
  toggleSelectedRoute
};

export default connect(mapStateToProps, mapDispatchToProps)(RoutesRow);
