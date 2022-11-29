import React from 'react';

const ChartsHeader = ({ category, title }) => (
  <div className=" charts">
    <div>
    
      <p className="category">{category}</p>
    </div>
    <p className="title">{title}</p>
  </div>
);

export default ChartsHeader;