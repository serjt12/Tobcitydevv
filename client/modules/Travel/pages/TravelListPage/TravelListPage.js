import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Import Components
import TravelList from '../../components/TravelList';

// Import Actions
import { fetchTravels } from '../../TravelActions';

// Import Selectors
import { getShowAddTravel } from '../../../Home/HomeReducer';
import { getTravels } from '../../TravelReducer';

class TravelListPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchTravels());
  }

  render() {
    return (
      <div>
        <TravelList handleDeleteTravel={this.handleDeleteTravel} travels={this.props.travels} />
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
TravelListPage.need = [() => { return fetchTravels(); }];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    showAddTravel: getShowAddTravel(state.home.showAddTravel),
    travels: getTravels(state),
  };
}

TravelListPage.propTypes = {
  travels: PropTypes.arrayOf(PropTypes.shape({
    from: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    plate: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
  dispatch: PropTypes.func.isRequired,
};

TravelListPage.contextTypes = {
  router: PropTypes.object,
};

export default connect(mapStateToProps)(TravelListPage);
