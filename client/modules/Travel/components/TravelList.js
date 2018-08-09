import React from 'react';
import PropTypes from 'prop-types';

// Import Components
import TravelListItem from './TravelListItem/TravelListItem';

function TravelList(props) {
  return (
    <div className="listView">
      {
        props.travels.map(travel => (
          <TravelListItem
            travel={travel}
            key={travel.cuid}
            onDelete={() => props.handleDeleteTravel(travel.cuid)}
          />
        ))
      }
    </div>
  );
}

TravelList.propTypes = {
  travels: PropTypes.arrayOf(PropTypes.shape({
    from: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    plate: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  })).isRequired,
  handleDeleteTravel: PropTypes.func.isRequired,
};

export default TravelList;
