import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './TravelDetailPage.css';

// Import Actions
import { fetchTravel } from '../../TravelActions';

// Import Selectors
import { getTravel } from '../../TravelReducer';

export function TravelDetailPage(props) {
  return (
    <div>
      <Helmet title={props.travel.from} />
      <div className={`${styles['single-post']} ${styles['post-detail']}`}>
        <h3 className={styles['post-title']}>{props.travel.from}</h3>
        <p className={styles['author-name']}><FormattedMessage id="by" /> {props.travel.to}</p>
        <p className={styles['post-desc']}>{props.travel.content}</p>
      </div>
    </div>
  );
}

// Actions required to provide data for this component to render in server side.
TravelDetailPage.need = [params => {
  return fetchTravel(params.cuid);
}];

// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {
    travel: getTravel(state, props.params.cuid),
  };
}

TravelDetailPage.propTypes = {
  travel: PropTypes.arrayOf(PropTypes.shape({
    from: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    plate: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  })).isRequired,
};

export default connect(mapStateToProps)(TravelDetailPage);
