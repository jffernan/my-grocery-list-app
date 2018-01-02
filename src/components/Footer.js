import React from 'react';
import FilterLink from './FilterLink';

const Footer = () => (
  <p>
    Show:
    {" "}
    <FilterLink filter="SHOW_ALL">
      All
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_BUY">
      Buy
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_PURCHASED">
      Purchased
    </FilterLink>
  </p>
);

export default Footer;
