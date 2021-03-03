import React from 'react';
import './BreweryListItem.css'


const BreweryListItem = ({ brewery }) => {
  const { title } = brewery;
  return (
    <div className="brewery-item">
      {title}
    </div>
  )
}

export default BreweryListItem;