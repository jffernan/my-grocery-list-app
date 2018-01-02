import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ buy, children, onClick }) => {
  if (buy) {
    return <span>{children}</span>
  }

  return (
    <a role="button"
       onClick={e => {
         e.preventDefault()
         onClick()
       }}
    >
      {children}
    </a>
  )
}


Link.propTypes = {
  buy: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Link;
