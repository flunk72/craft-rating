import React from 'react';
import BreweryList from '../BreweryList/BreweryList';
import './SideBar.css'

const SideBar = () => {
    return (
      <div className="sidebar">
        <BreweryList/>
      </div>
    )
}

export default SideBar;