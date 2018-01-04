import React from 'react';
import FilterLink from './FilterLink';

const Footer = () => (
  <p>
    Show:
    {" "}
    <FilterLink filter="SHOW_ALL">
      <u>All</u>
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_BUY">
      <u>Buy</u>
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_PURCHASED">
      <u>Purchased</u>
    </FilterLink>
  </p>
);

export default Footer;
