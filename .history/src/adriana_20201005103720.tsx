import React from 'react';
import './App.css';



function Adriana() {


  var dates = ['10-Jan-2013', '12-Dec-2013', '1-Sep-2013', '15-Sep-2013'],
    earliest = dates.reduce(function (pre, cur) {
        return Date.parse(pre) > Date.parse(cur) ? cur : pre;
    });

console.log(earliest); // 10-Jan-2013
  return (
    <div className="Adriana">
      
      
<p>adriana</p>
    </div>
  );
}

export default Adriana;