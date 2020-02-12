import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class Navigation extends Component {

  render() {
  return(
    <nav className="main-nav">
      <ul>
        <li><NavLink onClick={ () => this.props.results('atumn') } to="/Atumn">Atumn</NavLink></li>
        <li><NavLink onClick={ () => this.props.results('flowers') } to='/Flowers'>Flowers</NavLink></li>
        <li><NavLink onClick={ () => this.props.results('leaves') } to="/Leaves">Leaves</NavLink></li>
      </ul>
    </nav>
  );
 }
}

export default Navigation;
