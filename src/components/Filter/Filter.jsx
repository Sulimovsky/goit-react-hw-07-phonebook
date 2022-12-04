import PropTypes from 'prop-types';

const Filter = ({ filter, onFilterContact }) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={e => onFilterContact(e.target.value)}
      />
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterContact: PropTypes.func.isRequired,
};

export default Filter;
