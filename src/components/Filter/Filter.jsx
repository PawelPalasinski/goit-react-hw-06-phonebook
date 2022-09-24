import styles from './Filter.module.css';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import * as actions from '../../redux/actions';

const Filter = ({ filter, onFilter }) => {
  return (
    <input className={styles.filter}
      type="text"
      name="filter"
      value={filter}
      onChange={onFilter}
      placeholder="Enter name for Search"
    />
  );
};

Filter.propTypes = {
  onSufilterbmit: PropTypes.string,
  onChange: PropTypes.func,
};

// export default Filter;

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: event => dispatch(actions.changeFilter(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
