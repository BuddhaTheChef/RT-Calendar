import React, { Component } from "react";
import CalendarCreator from "./CalendarCreator";

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
      <div style={{borderRight: 'solid grey 1px', display: 'inline-block', width: '22%', height: '100vh' }}>
        <div className="main-date">{currentMonth + " " + currentDay}</div>
        <div className="weekday">{currentWeekDay}</div>
      </div>
        <CalendarCreator />
      </div>
    );
  }
}

export default Calendar;
