import React, { Component } from "react";
import CalendarCreator from "./CalendarCreator";
import { connect } from 'react-redux';
import {fetchEvents} from '../actions';

class Calendar extends Component {
  componentDidMount(){
    this.props.fetchEvents();
  }
  renderList() {
    return this.props.events.map(event => {
      return (
        <div className="" key={event.id}>
          <div className="content">
            {event.title}
            <div className="description">{event.description}</div>
          </div>
        </div>
      )
    })
  }

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
         <h2 style={{textAlign: 'center'}}>This Months Events</h2>
            <div className="sidebar-task-1-div-top">
              <h4 className="color-1-identify">Grocery List</h4>
            </div>
            <div className="sidebar-task-1-div-bottom" contentEditable="true" style={{fontStyle: 'italic', fontSize: '18px'}}></div>
            <div className="sidebar-task-2-div-top">
              <h4 className="color-2-identify">Bills</h4> 
            </div>
            <div className="sidebar-task-2-div-bottom" contentEditable="true" style={{fontStyle: 'italic', fontSize: '18px'}}></div>
            <div className="sidebar-task-3-div-top">
              <h4 className="color-3-identify">Special Events</h4>
            </div>
            <div className="sidebar-task-3-div-bottom" contentEditable="true" style={{fontStyle: 'italic', fontSize: '18px'}}></div>
           
        </div>
      </div>
        <CalendarCreator />
        <div>
          <h2>Events</h2>
          <div>
            {this.renderList()}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {events: Object.values(state.events)}
}

export default connect(mapStateToProps, { fetchEvents })(Calendar);
