import React from 'react';
import './CraftListItem.css'


const CraftListItem = ({ craft }) => {
  const { brewery, name, coverImage} = craft;
  return (
      <div className="craft-item">
        <div className="craft-item__image">
        <img src={coverImage} alt="cover" />
        </div>
      <div className="craft-item__discription">
        <span>{brewery}</span>
        <span>{name}</span>
      </div>
      </div>
  )
}

export default CraftListItem;