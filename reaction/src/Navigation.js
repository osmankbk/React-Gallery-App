import React from 'react';
//import Atumn from './Atumn';
import { Route, NavLink } from 'react-router-dom';


const Navigation = (props) => {
  return(
    <nav className="main-nav">
      <ul>
        <li><NavLink onClick={ () => props.searchPut('atumn') } to="Atumn">Atumn</NavLink></li>
        <li><NavLink onClick={  () => props.searchPut('flowers') } to='Flowers'>Flowers</NavLink></li>
        <li><NavLink onClick={() => props.searchPut('leaves') } to="Leaves">Leaves</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navigation;
