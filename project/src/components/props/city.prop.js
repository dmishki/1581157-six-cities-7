import PropTypes from 'prop-types';

export default PropTypes.shape({
  name: PropTypes.string,
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
  zoom: PropTypes.number.isRequired,
});
