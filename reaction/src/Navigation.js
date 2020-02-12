import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class Navigation extends Component {

  render() {
  return(
    <nav className="main-nav">
      <ul>
        <li><NavLink  to="/Atumn">Atumn</NavLink></li>
        <li><NavLink  to='/Flowers'>Flowers</NavLink></li>
        <li><NavLink  to="/Leaves">Leaves</NavLink></li>
      </ul>
    </nav>
  );
 }
}

export default Navigation;
