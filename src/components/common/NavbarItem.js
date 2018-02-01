import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBarItem(props) {
  return (
    <li>
      <NavLink to={props.url} activeClassName="active">
        {props.children}
      </NavLink>
    </li>
  );
}

NavBarItem.propTypes = {};

export default NavBarItem;
