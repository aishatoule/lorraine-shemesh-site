import React from 'react';
import menuIcon from '../../images/icons/hamburger-menu.svg';
import { bool, func } from 'prop-types';

const Burger = ({open ,setOpen }) => {
  return (
    <div className="menu-icon" onClick={() => setOpen(!open)}><img src={menuIcon} alt="Menu icon"/></div>
  )
}

Burger.propTypes = {
    open: bool.isRequired
}

export default Burger;