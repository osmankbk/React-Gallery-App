import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = (props) => {
  return(
    <nav className="main-nav">
      <ul>
        <li><NavLink onClick={ () => props.searchPut('lightning thunder') } to="Lightning">Lightning</NavLink></li>
        <li><NavLink onClick={  () => props.searchPut('sunsets') } to='Sunsets'>Sunsets</NavLink></li>
        <li><NavLink onClick={() => props.searchPut('planet explosion') } to="Chaos">Chaos!</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navigation;
