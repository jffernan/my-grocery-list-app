import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ onClick, purchased, text }) => (
  <div className = "center">
  <li
    onClick={onClick}
    style={{
      textDecoration: purchased ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
  </div>
)

Item.propTypes = {
  onClick: PropTypes.func.isRequired,
  purchased: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Item;
