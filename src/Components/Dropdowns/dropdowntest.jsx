import React from 'react';
import Dropdown from './Dropdown';

const dropdowntest = () => {
  const options = [
    { label: 'Option ww', value: '1' },
    { label: 'Option ww', value: '2' },
    { label: 'Option ww', value: '3' },
  ];
  return (
    <div>
      <h1>This is a separate page</h1>
      <Dropdown options={options} />
    </div>
  );
};

export default dropdowntest;


  
