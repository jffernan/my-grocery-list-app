import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ onClick, purchased, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: purchased ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
)

Item.propTypes = {
  onClick: PropTypes.func.isRequired,
  purchased: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Item;
