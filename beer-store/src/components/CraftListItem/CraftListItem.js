import React from 'react';
import './CraftListItem.css'


const CraftListItem = ({ craft }) => {
  const { brewery, name, sort, coverImage} = craft;
  return (
      <div className="craft-item">
        <div className="craft-item__image">
          <img src={coverImage} alt="cover" />
        </div>
        <div className="craft-item__discription">
          <span>{brewery}</span>
          <span>{name}</span>
          <span>{sort}</span>
        </div>
      </div>
  )
}

export default CraftListItem;