import React from "react";
import moment from 'moment';

import { Icon } from 'semantic-ui-react';

class CalendarCreator extends React.Component {
    constructor(props) {
      super(props);
      
      this.state = {
        month: moment(),
        selected: moment().startOf('day')
      };
      
      this.previous = this.previous.bind(this);
      this.next = this.next.bind(this);
    }
    
    previous() {
      const {
        month,
      } = this.state;
  
      this.setState({
        month: month.subtract(1, 'month'),
      });
    }
  
    next() {
      const {
        month,
      } = this.state;
  
      this.setState({
        month: month.add(1,'month'),
      });
    }
    
    select(day) {
      this.setState({
        selected: day.date,
        month: day.date.clone(),
      });
    }
  
    renderWeeks() {
      let weeks = [];
      let done = false;
      let date = this.state.month.clone().startOf("month").add("w" -1).day("Sunday");
      let count = 0;
      let monthIndex = date.month();
  
      const {
        selected,
        month,
      } = this.state;
  
      while (!done) {
        weeks.push(
          <Week key={date} 
            date={date.clone()} 
            month={month} 
            select={(day)=>this.select(day)} 
            selected={selected} />
        );
  
        date.add(1, "w");
        
        done = count++ > 2 && monthIndex !== date.month();
        monthIndex = date.month();
      }
  
      return weeks;
    };
  
    renderMonthLabel() {
      const {
        month,
      } = this.state;
  
      return <span className="month-label">{month.format("MMMM YYYY")}</span>;
    }
  
    render() {
      return (
          <div style={{display: 'inline-block', width: '78%', position:'absolute', margin: '0', top:'100px'}}>
        <section className="calendar">
          <header className="header">
            <div className="month-display row">
              
              {this.renderMonthLabel()}
             
            </div>
            <DayNames />
          </header>
          {this.renderWeeks()}
        </section>
        <div className="main-button-div">
        <Icon name='angle double left' size='big' onClick={this.previous} />
        <Icon name='angle double right' size='big' onClick={this.next} />
        </div>
        </div>
      );
    }
  }
  
  class DayNames extends React.Component {
      render() {
          return (
            <div className="row day-names">
              <span className="day" id="dayOfWeek">Sun</span>
              <span className="day" id="dayOfWeek">Mon</span>
              <span className="day" id="dayOfWeek">Tue</span>
              <span className="day" id="dayOfWeek">Wed</span>
              <span className="day" id="dayOfWeek">Thu</span>
              <span className="day" id="dayOfWeek">Fri</span>
              <span className="day" id="dayOfWeek">Sat</span>
            </div>
          );
      }
  }
  
  class Week extends React.Component {
    render() {
      let days = [];
      let {
        date,
      } = this.props;
      
      const {
        month,
        selected,
        select,
      } = this.props;
  
      for (var i = 0; i < 7; i++) {
        let day = {
            name: date.format("dd").substring(0, 1),
            number: date.date(),
            isCurrentMonth: date.month() === month.month(),
            isToday: date.isSame(new Date(), "day"),
            date: date
        };
        days.push(
          <Day day={day}
            selected={selected}
            select={select}/>
        );
  
        date = date.clone();
        date.add(1, "day");
      }
  
      return (
        <div className="row week" key={days[0]}>
          {days}
        </div>
      );
    }
  
  }
  
  class Day extends React.Component {
    render() {
      const {
        day,
        day: {
          date,
          isCurrentMonth,
          isToday,
          number
        },
        select,
        selected
      } = this.props;
  
      return (
        <span 
          key={date.toString()} 
          className={"day" + (isToday ? " today" : "") + (isCurrentMonth ? "" : " different-month") + (date.isSame(selected) ? " selected" : "")} 
          onClick={()=>select(day)}>{number}</span>
      );
    }
  }

export default CalendarCreator;