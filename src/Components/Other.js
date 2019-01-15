import React, { Component } from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

class Other extends Component {
    render() {
        var d = new Date();
        let months = ["Jan","Feb","March","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"];
        let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        let currentMonth = months[d.getMonth()]
        let currentDay = d.getDate();
        let currentWeekDay = days[d.getDay()];
 return (
<div>
<div className="main-date-other">{currentMonth + " " + currentDay}</div>
        <div className="weekday-other">{currentWeekDay}</div>
    <h1 style={{textAlign: 'center', marginTop: '120px'}}>Todays Schedule</h1>
<VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    iconStyle={{ background: 'rgba(107, 29, 252, 0.8)', color: '#fff'}}
     icon={<i style={{position: 'absolute', top: '18px'}}>12:00 AM</i>}
  >
    <h3 className="vertical-timeline-element-title">Event</h3>
    <h4 className="vertical-timeline-element-subtitle">12:00am - 12:30am</h4>
    <p>
      Enter a description or details about this event. Orginize events dynamically for ease of use.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    iconStyle={{ background: 'rgba(107, 29, 252, 0.8)', color: '#fff' }}
    icon={<i style={{position: 'absolute', top: '18px', left: '5px'}}>1:00 AM</i>}
  >
    <h3 className="vertical-timeline-element-title">Event</h3>
    <h4 className="vertical-timeline-element-subtitle">1:00am - 1:20am</h4>
    <p>
     Enter a description or details about this event. Orginize events dynamically for ease of use.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    iconStyle={{ background: 'rgba(107, 29, 252, 0.8)', color: '#fff' }}
    icon={<i style={{position: 'absolute', top: '18px', left: '5px'}}>2:00 AM</i>}
  >
    <h3 className="vertical-timeline-element-title">Event</h3>
    <h4 className="vertical-timeline-element-subtitle">2:00am - 2:30am</h4>
    <p>
    Enter a description or details about this event. Orginize events dynamically for ease of use.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    iconStyle={{ background: 'rgba(107, 29, 252, 0.8)', color: '#fff' }}
    icon={<i style={{position: 'absolute', top: '18px', left: '5px'}}>3:00 AM</i>}
  >
    <h3 className="vertical-timeline-element-title">Event</h3>
    <h4 className="vertical-timeline-element-subtitle">3:00am - 3:03am</h4>
    <p>
    Enter a description or details about this event. Orginize events dynamically for ease of use.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    iconStyle={{ background: 'rgba(107, 29, 252, 0.8)', color: '#fff' }}
    icon={<i style={{position: 'absolute', top: '18px', left: '5px'}}>4:00 AM</i>}
  >
    <h3 className="vertical-timeline-element-title">Event</h3>
    <h4 className="vertical-timeline-element-subtitle">4:00am - 4:45am</h4>
    <p>
    Enter a description or details about this event. Orginize events dynamically for ease of use.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    iconStyle={{ background: 'rgba(107, 29, 252, 0.8)', color: '#fff' }}
    icon={<i style={{position: 'absolute', top: '18px', left: '5px'}}>5:00 AM</i>}
  >
    <h3 className="vertical-timeline-element-title">Event</h3>
    <h4 className="vertical-timeline-element-subtitle">5:00am - 5:55am</h4>
    <p>
    Enter a description or details about this event. Orginize events dynamically for ease of use.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    iconStyle={{ background: 'rgba(107, 29, 252, 0.8)', color: '#fff' }}
    icon={<i style={{position: 'absolute', top: '18px', left: '5px'}}>6:00 AM</i>}
  >
    <h3 className="vertical-timeline-element-title">Event</h3>
    <h4 className="vertical-timeline-element-subtitle">6:00am - 6:20am</h4>
    <p>
    Enter a description or details about this event. Orginize events dynamically for ease of use.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    iconStyle={{ background: 'rgba(107, 29, 252, 0.8)', color: '#fff' }}
    icon={<i style={{position: 'absolute', top: '18px', left: '5px'}}>7:00 AM</i>}
  >
    <h3 className="vertical-timeline-element-title">Event</h3>
    <h4 className="vertical-timeline-element-subtitle">7:00am - 7:30am</h4>
    <p>
    Enter a description or details about this event. Orginize events dynamically for ease of use.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    iconStyle={{ background: 'rgba(107, 29, 252, 0.8)', color: '#fff' }}
    icon={<i style={{position: 'absolute', top: '18px', left: '5px'}}>8:00 AM</i>}
  >
    <h3 className="vertical-timeline-element-title">Event</h3>
    <h4 className="vertical-timeline-element-subtitle">8:00am - 8:30am</h4>
    <p>
    Enter a description or details about this event. Orginize events dynamically for ease of use.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    iconStyle={{ background: 'rgba(107, 29, 252, 0.8)', color: '#fff' }}
    icon={<i style={{position: 'absolute', top: '18px', left: '5px'}}>9:00 AM</i>}
  >
    <h3 className="vertical-timeline-element-title">Event</h3>
    <h4 className="vertical-timeline-element-subtitle">9:00am - 9:30am</h4>
    <p>
    Enter a description or details about this event. Orginize events dynamically for ease of use.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    iconStyle={{ background: 'rgba(107, 29, 252, 0.8)', color: '#fff' }}
    icon={<i style={{position: 'absolute', top: '18px'}}>10:00 AM</i>}
  >
    <h3 className="vertical-timeline-element-title">Event</h3>
    <h4 className="vertical-timeline-element-subtitle">10:00am - 10:30am</h4>
    <p>
    Enter a description or details about this event. Orginize events dynamically for ease of use.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    iconStyle={{ background: 'rgba(107, 29, 252, 0.8)', color: '#fff' }}
    icon={<i style={{position: 'absolute', top: '18px'}}>11:00 AM</i>}
  >
    <h3 className="vertical-timeline-element-title">Event</h3>
    <h4 className="vertical-timeline-element-subtitle">11:00am - 11:30am</h4>
    <p>
    Enter a description or details about this event. Orginize events dynamically for ease of use.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    iconStyle={{ background: 'rgba(107, 29, 252, 0.8)', color: '#fff' }}
    icon={<i style={{position: 'absolute', top: '18px'}}>12:00 PM</i>}
  >
    <h3 className="vertical-timeline-element-title">Event</h3>
    <h4 className="vertical-timeline-element-subtitle">12:00pm - 12:30pm</h4>
    <p>
    Enter a description or details about this event. Orginize events dynamically for ease of use.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    iconStyle={{ background: 'rgba(107, 29, 252, 0.8)', color: '#fff' }}
    icon={<i style={{position: 'absolute', top: '18px', left: '5px'}}>1:00 PM</i>}
  >
    <h3 className="vertical-timeline-element-title">Event</h3>
    <h4 className="vertical-timeline-element-subtitle">1:00pm - 1:30pm</h4>
    <p>
    Enter a description or details about this event. Orginize events dynamically for ease of use.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    iconStyle={{ background: 'rgba(107, 29, 252, 0.8)', color: '#fff' }}
    icon={<i style={{position: 'absolute', top: '18px', left: '5px'}}>2:00 PM</i>}
  >
    <h3 className="vertical-timeline-element-title">Event</h3>
    <h4 className="vertical-timeline-element-subtitle">2:00pm - 2:30pm</h4>
    <p>
    Enter a description or details about this event. Orginize events dynamically for ease of use.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    iconStyle={{ background: 'rgba(107, 29, 252, 0.8)', color: '#fff' }}
    icon={<i style={{position: 'absolute', top: '18px', left: '5px'}}>3:00 PM</i>}
  >
    <h3 className="vertical-timeline-element-title">Event</h3>
    <h4 className="vertical-timeline-element-subtitle">3:00pm - 3:30pm</h4>
    <p>
    Enter a description or details about this event. Orginize events dynamically for ease of use.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    iconStyle={{ background: 'rgba(107, 29, 252, 0.8)', color: '#fff' }}
    icon={<i style={{position: 'absolute', top: '18px', left: '5px'}}>4:00 PM</i>}
  >
    <h3 className="vertical-timeline-element-title">Event</h3>
    <h4 className="vertical-timeline-element-subtitle">4:00pm - 4:30pm</h4>
    <p>
    Enter a description or details about this event. Orginize events dynamically for ease of use.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    iconStyle={{ background: 'rgba(107, 29, 252, 0.8)', color: '#fff' }}
    icon={<i style={{position: 'absolute', top: '18px', left: '5px'}}>5:00 PM</i>}
  >
    <h3 className="vertical-timeline-element-title">Event</h3>
    <h4 className="vertical-timeline-element-subtitle">5:00pm - 5:30pm</h4>
    <p>
    Enter a description or details about this event. Orginize events dynamically for ease of use.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    iconStyle={{ background: 'rgba(107, 29, 252, 0.8)', color: '#fff' }}
    icon={<i style={{position: 'absolute', top: '18px', left: '5px'}}>6:00 PM</i>}
  >
    <h3 className="vertical-timeline-element-title">Event</h3>
    <h4 className="vertical-timeline-element-subtitle">6:00pm - 6:30pm</h4>
    <p>
    Enter a description or details about this event. Orginize events dynamically for ease of use.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    iconStyle={{ background: 'rgba(107, 29, 252, 0.8)', color: '#fff' }}
    icon={<i style={{position: 'absolute', top: '18px', left: '5px'}}>7:00 PM</i>}
  >
    <h3 className="vertical-timeline-element-title">Event</h3>
    <h4 className="vertical-timeline-element-subtitle">7:00pm - 7:30pm</h4>
    <p>
    Enter a description or details about this event. Orginize events dynamically for ease of use.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    iconStyle={{ background: 'rgba(107, 29, 252, 0.8)', color: '#fff' }}
    icon={<i style={{position: 'absolute', top: '18px', left: '5px'}}>8:00 PM</i>}
  >
    <h3 className="vertical-timeline-element-title">Event</h3>
    <h4 className="vertical-timeline-element-subtitle">8:00pm - 8:30pm</h4>
    <p>
    Enter a description or details about this event. Orginize events dynamically for ease of use.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    iconStyle={{ background: 'rgba(107, 29, 252, 0.8)', color: '#fff' }}
    icon={<i style={{position: 'absolute', top: '18px', left: '5px'}}>9:00 PM</i>}
  >
    <h3 className="vertical-timeline-element-title">Event</h3>
    <h4 className="vertical-timeline-element-subtitle">9:00pm - 9:30pm</h4>
    <p>
    Enter a description or details about this event. Orginize events dynamically for ease of use.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    iconStyle={{ background: 'rgba(107, 29, 252, 0.8)', color: '#fff' }}
    icon={<i style={{position: 'absolute', top: '18px'}}>10:00 PM</i>}
  >
    <h3 className="vertical-timeline-element-title">Event</h3>
    <h4 className="vertical-timeline-element-subtitle">10:00pm - 10:30pm</h4>
    <p>
    Enter a description or details about this event. Orginize events dynamically for ease of use.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    iconStyle={{ background: 'rgba(107, 29, 252, 0.8)', color: '#fff' }}
    icon={<i style={{position: 'absolute', top: '18px'}}>11:00 PM</i>}
  >
    <h3 className="vertical-timeline-element-title">Event</h3>
    <h4 className="vertical-timeline-element-subtitle">11:00pm - 11:30pm</h4>
    <p>
    Enter a description or details about this event. Orginize events dynamically for ease of use.
    </p>
    </VerticalTimelineElement>
</VerticalTimeline>
</div>
        )
    }
}

export default Other;