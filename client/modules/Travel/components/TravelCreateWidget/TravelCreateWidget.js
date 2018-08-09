import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

// Import Style
import styles from './TravelCreateWidget.css';

export class TravelCreateWidget extends Component {
  addTravel = () => {
    const fromRef = this.refs.from;
    const toRef = this.refs.to;
    const dateRef = this.refs.date;
    const plateRef = this.refs.plate;
    const priceRef = this.refs.price;
    const modelRef = this.refs.model;
    const commentRef = this.refs.comment;
    if (fromRef.value && toRef.value && dateRef.value && plateRef.value && priceRef.value && modelRef.value && commentRef.value) {
      this.props.addTravel(fromRef.value, toRef.value, dateRef.value, plateRef.value, priceRef.value, modelRef.value, commentRef.value);
      fromRef.value = toRef.value = dateRef.value = plateRef.value = priceRef.value = modelRef.value = commentRef.value = '';
    }
  };
  render() {
    const cls = `${styles.form} ${(this.props.showAddTravel ? styles.appear : '')}`;
    return (
      <div className={cls}>
        <div className={styles['form-content']}>
          <h2 className={styles['form-title']}><FormattedMessage id="createNewPost" /></h2>
          <input placeholder={this.props.intl.messages.from} className={styles['form-field']} ref="from" />
          <input placeholder={this.props.intl.messages.to} className={styles['form-field']} ref="to" />
          <input type="date" placeholder={this.props.intl.messages.date} className={styles['form-field']} ref="date" />
          <input placeholder={this.props.intl.messages.plate} className={styles['form-field']} ref="plate" />
          <input type="number" min="1" step="any" placeholder={this.props.intl.messages.price} className={styles['form-field']} ref="price" />
          <input placeholder={this.props.intl.messages.model} className={styles['form-field']} ref="model" />
          <textarea placeholder={this.props.intl.messages.comment} className={styles['form-field']} ref="comment" />
          <a className={styles['post-submit-button']} href="#" onClick={this.addTravel}><FormattedMessage id="submit" /></a>
        </div>
      </div>
    );
  }
}

TravelCreateWidget.propTypes = {
  addTravel: PropTypes.func.isRequired,
  showAddTravel: PropTypes.bool.isRequired,
  intl: intlShape.isRequired,
};

export default injectIntl(TravelCreateWidget);
