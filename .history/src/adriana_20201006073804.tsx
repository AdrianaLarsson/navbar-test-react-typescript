import React from 'react';
import './App.css';
import moment from "moment";




function Adriana() {



  var dates = ['10-Jan-2013', '12-Dec-2013', '1-Sep-2013', '15-Sep-2013'],
    earliest = dates.reduce(function (pre, cur) {
        return Date.parse(pre) > Date.parse(cur) ? cur : pre;
    });

console.log(earliest); // 10-Jan-2013
const expDate = moment(new Date("1999-02-18T00:00:00"));
console.log('expDate',expDate)
const nowDate = moment();
const nowDateFormated = nowDate.format('MM-DD-YYYY');
const expDateFormated = expDate.format('MM-DD-YYYY');
console.log('nowDateFormated',nowDateFormated)
console.log('expDateFormated ',expDateFormated)


var array = [{ "id": 5, "date": "2016-01-15T16:18:44.258843Z", "status": "NEW", "created_at": "2016-01-29T13:30:39.315000Z", "updated_at": "2016-01-29T13:30:39.315000Z", "request": 4 }, { "id": 6, "date": "2016-01-19T16:18:44.258843Z", "status": "STD", "created_at": "2016-01-29T13:30:39.372000Z", "updated_at": "2016-01-29T13:30:39.372000Z", "request": 4 }, { "id": 7, "date": "2016-01-23T16:18:44.258843Z", "status": "FOR", "created_at": "2016-01-29T13:30:39.417000Z", "updated_at": "2016-01-29T13:30:39.417000Z", "request": 4 }],
    latest = array.reduce(function (r, a) {
        return r.date > a.date ? r : a;
    });

console.log('latest',latest)
  return (
    <div className="Adriana">
      
      
<p>adriana</p>
<p>Main changes</p>
    </div>
  );
}

export default Adriana;