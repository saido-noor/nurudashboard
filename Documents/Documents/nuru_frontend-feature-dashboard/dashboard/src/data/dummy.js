// import React from 'react';

export const colorMappingData = [
    [
      { x: 'Mon', y: 400 },
      { x: 'Tue', y: 300 },
      { x: 'Wed', y: 120 },
      { x: 'Thu', y: 170 },
      { x: 'Fri', y: 220 },
      { x: 'Sat', y: 250 },
      { x: 'Sun', y: 290 },
    ],
  ];
  
  
  export const ColorMappingPrimaryXAxis = {
    valueType: 'Category',
    majorGridLines: { width: 0 },
    title: 'Days',
  };
  
  export const ColorMappingPrimaryYAxis = {
    lineStyle: { width: 0 },
    majorTickLines: { width: 0 },
    minorTickLines: { width: 0 },
    labelFormat: '{value}',
    title: 'Registered Users',
  };