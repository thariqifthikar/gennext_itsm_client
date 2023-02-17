import React, { useState } from 'react';
import './ActiveInactive.css';
import ActiveInactiveData from './ActiveInactiveData1';
import ActiveInactiveData2 from './ActiveInactiveData2';

const ActiveInactive = () => {
  const [showTab, setShowTab] = useState(1);

  const handleTab = (e) => {
    setShowTab(e);
  };

  return (
    <div className="ActiveInactivePane">
      <div className="Buttons">
        <button className={showTab === 1 ? 'B1' : 'B1'} onClick={() => handleTab(1)}>Active<span className="Num">(2)</span></button>
        <button className={showTab === 2 ? 'B2' : 'B2'} onClick={() => handleTab(2)}>Inactive<span className="Num">(4)</span></button>
      </div>
{showTab === 1 && (
<div className="fpage">
<ActiveInactiveData/></div>)}
    
{showTab === 2 && (
<div className="Spage">
<ActiveInactiveData2/></div>)}
</div>
  );
};

export default ActiveInactive;
