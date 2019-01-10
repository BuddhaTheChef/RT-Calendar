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
        <div className="calendar-sidebar-div">
         <h2>Todays Events</h2>
            <div className="sidebar-task-1-div"><h4>Task 1:</h4></div>
            <div className="sidebar-task-2-div"><h4>Task 2:</h4></div>
            <div className="sidebar-task-3-div"><h4>Task 3:</h4></div>
            <div className="sidebar-task-4-div"><h4>Task 4:</h4></div>
        </div>
      </div>
        <CalendarCreator />
      </div>
    );
  }
}

export default Calendar;
