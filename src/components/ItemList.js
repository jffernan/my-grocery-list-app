import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item'

const ItemList = ({ items, onItemClick }) => (
  <div className="center">
    <ul>
      {items.map(item =>
        <Item
          key={item.id}
          {...item}
          onClick={() => onItemClick(item.id)}
        />
      )}
    </ul>
  </div>
)

ItemList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    purchased: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onItemClick: PropTypes.func.isRequired
}

export default ItemList;
