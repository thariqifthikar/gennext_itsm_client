import React, { useState } from 'react';


const Dropdown = (props) => {
    

    return (
      <select className='dropdown' 
      >
        {props.options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    );
  };
export default Dropdown;
