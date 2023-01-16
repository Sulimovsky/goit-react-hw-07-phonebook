import PropTypes from 'prop-types';

const Filter = ({ onFilterContact }) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        onChange={e => onFilterContact(e.target.value)}
      />
    </div>
  );
};

Filter.propTypes = {
  // filter: PropTypes.string.isRequired,
  onFilterContact: PropTypes.func.isRequired,
};

export default Filter;
