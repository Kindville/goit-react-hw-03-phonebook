import PropTypes from "prop-types";

export const Filter =({ value, changeFilter }) => {
  return (
    <div>
      <p>Find contacts by name:</p>
      <input
        type="text"
        value={value}
        onChange={(e) => changeFilter(e.target.value)}
      />
    </div>
  );
}


Filter.propTypes = {
  value: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};