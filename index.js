import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { DatePicker } from 'antd';

function disabledDate(current) {
    //获得昨天的毫秒数，把日期范围设为今天以前和2017-08-31之后
    var yesterday = new Date(new Date().getTime()-24*60*60*1000);
  return current && (current.valueOf() < yesterday || current.valueOf() > new Date("2017-09-01"));
}

function App() {
  return (
    <div style={{ margin: 100 }}>
      <h1>AntDesign Demo</h1>
      <hr /><br />
      <DatePicker disabledDate={disabledDate} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
