import React from "react";
import moment from 'moment';
import { connect } from 'react-redux';
import {fetchEvents} from '../actions';

import { Icon } from 'semantic-ui-react';

class CalendarCreator extends React.Component {
    constructor(props) {
      super(props);
      
      this.state = {
        month: moment(),
        selected: moment().startOf('day'),
        eventShow: false
      };
      
      this.previous = this.previous.bind(this);
      this.next = this.next.bind(this);
    }

      componentDidMount(){
        this.props.fetchEvents();
        console.log(this.props)
      }
    
      renderBills() {
        return this.props.events.map(event => {
            if(event.userId === this.props.currentUserId && event.type === "Bills") {
          return (
            <div key={event.id} style={{color: 'red', fontSize: '50px'}}>
                {event.itemName}
            </div>
          )
        }
        else {
          return null
        }
        })
      }

      renderEvents() {
        return this.props.events.map(event => {
            if(event.userId === this.props.currentUserId && event.type === "Events") {
          return (
            <div className="renderInputDiv" key={event.id}>
              <div className="content" style={{display: 'inline'}}>
                {event.itemName}
              </div>
            </div>
          )
         }
         else {
           return null;
         }
        })
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
        eventShow: true 
      })
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
        eventShow
      } = this.state;
  
      while (!done) {
        weeks.push(
          <Week key={date} 
            date={date.clone()} 
            month={month} 
            select={(day)=>this.select(day)} 
            selected={selected} eventShow={eventShow} props={this.props}/>
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
          <div style={{display: 'inline-block', width: '78%', position:'absolute', margin: '0', top:'120px'}}>
        <section className="calendar">
          <header className="header">
            <DayNames />
          </header>
          {this.renderWeeks()}
        </section>
        <div className="main-button-div">
        <Icon name='angle double left' size='big' onClick={this.previous} />
        <Icon name='angle double right' size='big' onClick={this.next} />
        </div>
        <div className="month-display-row">
           {this.renderMonthLabel()}  
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
        eventShow
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
          <Day day={day} key={date}
            selected={selected}
            select={select} eventShow={eventShow} props={this.props}/>
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
          number,
        },
        select,
        selected,
        eventShow,
      } = this.props;

      const { events } = this.props.props.props;
      const momentDate = (moment(day.date).format(('MMMM DD YYYY h:mm:ss')))
      let cool = [];
      for(var prop in events) {
        events[prop].date = moment(events[prop].date).format('MMMM DD YYYY h:mm:ss')
        cool = events[prop]
        try{throw cool}
        catch(ii) {
            setTimeout(function(){
                return ii
            },1000);
        }
      } 

      var newVariable = [];
      events.forEach(function (arrayItem) {
        var x = arrayItem;
        newVariable.push(x);
    });

     const result = newVariable.filter(word => word.date === momentDate && word.type === 'Bills');
     const results = newVariable.filter(word => word.date === momentDate && word.type === 'Events');

      return (
        <div>
        <span 
          key={date.toString()} 
          className={"day" + (isToday ? " today" : "") + (isCurrentMonth ? "" : " different-month") + (date.isSame(selected) ? " selected" : "")} 
          onClick={()=>select(day)}>
          <div style={{position: 'absolute'}}>{number}</div>
          { result[0] && result[0].date === momentDate && result[0].type === 'Bills'
            ?
          <div className="event-span-show">

          </div>
          :
          null
          }
            { results[0] && results[0].date === momentDate && results[0].type === 'Events'
            ?
          <div className="event-span-show1">

          </div>
          :
          null
          }
          </span>
        {
          eventShow && date.isSame(selected)
          ?
        <div className="clicked-day-div-event">
        { 
        result[0] && result[0].date === momentDate && result[0].type === 'Bills'
        ?
        <div>
        <div className="sub-identifier1">
        <span><div className="sub-identifier1-inner"></div></span>Bills:{<div style={{marginLeft: '8px'}}>{result[0].itemName}</div>}
        </div>
        </div>
        :
        <div></div>
        }
        {
          results[0] && results[0].date === momentDate && results[0].type === 'Events'
          ?
        <div>
         <div className="sub-identifier2">
        <span><div className="sub-identifier2-inner"></div></span>Events:{<div style={{marginLeft: '8px'}}>{results[0].itemName}</div>}
        </div> 
        </div>
        :
        <div></div>
        }
        </div>
        : 
        <div></div>
        }
          </div>
      );
    }
  }

  const mapStateToProps = (state) => {
    return {
        events: Object.values(state.events),
        currentUserId: state.auth.userId
    }
  }

export default connect(mapStateToProps, { fetchEvents })(CalendarCreator);