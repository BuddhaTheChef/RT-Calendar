import React, { Component } from "react";
import Profile from './Profile';

class Calendar extends Component {
  render() {
    var d = new Date();
    let months = ["Jan","Feb","March","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"];
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let currentMonth = months[d.getMonth()]
    let currentDay = d.getDate();
    let currentWeekDay = days[d.getDay()];
    return (
      <div className="calendar-main">
      <div className="main-date">{currentMonth + " " + currentDay}</div>
      <div className="weekday">{currentWeekDay}</div>
          <h1 className="main-calendar-title">Calendar 2.0</h1>
        <Profile />
      </div>
    );
  }
}

export default Calendar;
