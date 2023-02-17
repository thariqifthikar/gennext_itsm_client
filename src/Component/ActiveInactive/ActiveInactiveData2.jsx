import React from 'react';
import './ActiveInactive.css';

function TableRow({ data }) {
  return (
    <tr>
      <td> <div className="cell">
          <span className="bold">{data.line1}</span>
          <br /> {data.line2}</div>
      </td>
      <td>{data.time}</td>
      <td>{data.date}</td>
      <td>
        <button className="more-btn">More</button>
      </td>
    </tr>
  );
}

function Table() {
  const data = [
    {
      line1: 'Active Record 1',
      line2: 'Software Development',
      time: '13.10pm',
      date: '2021/02/03',
    },
    
    // Add more data objects here
  ];

  return (
    <table className="table">
   
      <tbody>
        {data.map((item, index) => (
          <TableRow key={index} data={item} />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
