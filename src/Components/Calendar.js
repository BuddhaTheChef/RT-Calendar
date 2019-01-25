import React, { Component } from "react";
import CalendarCreator from "./CalendarCreator";
import SideBar from "./SideBar";

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
        <div className="main-color-identifier">
        <div className="sub-identifier1">
        Bills: <span><div className="sub-identifier1-inner"></div></span>
        </div>
         <div className="sub-identifier2">
        Events: <span><div className="sub-identifier2-inner"></div></span>
        </div>
      </div>
      <div style={{borderRight: 'solid grey 1px', display: 'inline-block', width: '22%', height: '100vh' }}>
        <div className="main-date">{currentMonth + " " + currentDay}</div>
        <div className="weekday">{currentWeekDay}</div>
      <SideBar/>
      </div>
        <CalendarCreator />
      </div>
    );
  }
}

export default Calendar;
