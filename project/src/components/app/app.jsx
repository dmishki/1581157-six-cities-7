import React from 'react';
import Main from '../main/main';
import PropTypes from 'prop-types';

function App(props) {
  const { itemsId } = props;

  return (
    <Main itemsId = {itemsId} />
  );
}

App.propTypes = {
  itemsId: PropTypes.number,
};

export default App;
