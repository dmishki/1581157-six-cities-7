import React from 'react';
import PropTypes from 'prop-types';

function SortingItem(props) {
  const { isActive, stateSort, changeSort, setActive, text } = props;

  return (
    <li key={text} className={stateSort === text ? 'places__option places__option--active' : 'places__option'} tabIndex="0"
      onClick={() => {
        setActive(!isActive);
        changeSort(text);
      }}
    >
      {text}
    </li>
  );
}

SortingItem.propTypes = {
  text: PropTypes.string.isRequired,
  stateSort: PropTypes.string,
  setActive: PropTypes.func,
  changeSort: PropTypes.func,
  isActive: PropTypes.bool.isRequired,
};

export default SortingItem;
