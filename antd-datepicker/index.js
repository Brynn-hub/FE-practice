import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css'; 

import { DatePicker } from 'antd';
import moment from 'moment';

const { RangePicker } = DatePicker;

// function onChange(dates, dateStrings) {
//   console.log('From: ', dates[0], ', to: ', dates[1]);
//   console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
// }
function MyRange(onChange) {
  return (
    <div>
      <RangePicker defaultValue={[moment('20130607'), moment('20190301')]} />
    </div>
  );
}
function App() {
  onDateRange = (val) => (e) => {

  }
  return (
    <div>
      <h1>Quick Ranges</h1>
      <span onClick={onDateRange(2)}>last 2 days</span>
      <MyRange />
    </div>
  );
}
ReactDOM.render(
  <App />,
  document.body
);