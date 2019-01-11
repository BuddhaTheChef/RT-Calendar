import React, { Component } from "react";
import interact from 'interactjs';

class Profile extends Component {
  render() {
    interact('.resize-drag')
  .draggable({
    onmove: window.dragMoveListener,
    restrict: {
      restriction: 'parent',
      elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
    },
  })
  .resizable({
    // resize from all edges and corners
    edges: { left: true, right: true, bottom: false, top: false },

    // keep the edges inside the parent
    restrictEdges: {
      outer: 'parent',
      endOnly: true,
    },

    // minimum size
    restrictSize: {
      min: { width: 100, height: 50 },
    },

    inertia: true,
  })
  .on('resizemove', function (event) {
    var target = event.target,
        x = (parseFloat(target.getAttribute('data-x')) || 0),
        y = (parseFloat(target.getAttribute('data-y')) || 0);

    // update the element's style
    target.style.width  = event.rect.width + 'px';
    target.style.height = event.rect.height + 'px';

    // translate when resizing from top or left edges
    x += event.deltaRect.left;
    y += event.deltaRect.top;

    target.style.webkitTransform = target.style.transform =
        'translate(' + x + 'px,' + y + 'px)';

    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);

  });
    return (
      <div>
          <div className="event-div">
              <h1 className="event-main-title">This Weeks Events</h1>
          </div>
        <div style={{ marginTop: "90px"}}>
          <table>
            <thead>
              <tr>
                <th />
                <th>
                  <span className="day">12am</span>
                </th>
                <th>
                  <span className="day">1am</span>
                </th>
                <th>
                  <span className="day">2am</span>
                </th>
                <th>
                  <span className="day">3am</span>
                </th>
                <th>
                  <span className="day">4am</span>
                </th>
                <th>
                  <span className="day">5am</span>
                </th>
                <th>
                  <span className="day">6am</span>
                </th>
                <th>
                  <span className="day">7am</span>
                </th>
                <th>
                  <span className="day">8am</span>
                </th>
                <th>
                  <span className="day">9am</span>
                </th>
                <th>
                  <span className="day">10am</span>
                </th>
                <th>
                  <span className="day">11am</span>
                </th>
                <th>
                  <span className="day">12pm</span>
                </th>
                <th>
                  <span className="day">1pm</span>
                </th>
                <th>
                  <span className="day">2pm</span>
                </th>
                <th>
                  <span className="day">3pm</span>
                </th>
                <th>
                  <span className="day">4pm</span>
                </th>
                <th>
                  <span className="day">5pm</span>
                </th>
                <th>
                  <span className="day">6pm</span>
                </th>
                <th>
                  <span className="day">7pm</span>
                </th>
                <th>
                  <span className="day">8pm</span>
                </th>
                <th>
                  <span className="day">9pm</span>
                </th>
                <th>
                  <span className="day">10pm</span>
                </th>
                <th>
                  <span className="day">11pm</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="hour" rowSpan="4">
                  <span className="short">Sun</span>
                </td>
           
                <div class="resize-container">
                <div class="resize-drag">
                Resize 
                </div>
                </div>
              </tr>
              <tr></tr>
              <tr></tr>
              <tr></tr>
              <tr>
                <td className="hour" rowSpan="4">
                  <span>Mon</span>
                </td>
                <div class="resize-container">
                <div class="resize-drag">
                Resize 
                </div>
                </div>
               
              </tr>
              <tr>
               
              </tr>
              <tr>
              
              </tr>
              <tr>
               
              </tr>

              <tr>
                <td className="hour" rowSpan="4">
                  <span>Tues</span>
                </td>
                <div class="resize-container">
                <div class="resize-drag">
                Resize 
                </div>
                </div>

              </tr>
              <tr>
              
              </tr>
              <tr>
              
              </tr>
              <tr>
             
              </tr>
              <tr>
                <td className="hour" rowSpan="4">
                  <span>Wed</span>
                </td>
                <div class="resize-container">
                <div class="resize-drag">
                Resize 
                </div>
                </div>
              </tr>
              <tr>
               
              </tr>
              <tr>
              
              </tr>
              <tr>
               
              </tr>
              <tr>
                <td className="hour" rowSpan="4">
                  <span>Thur</span>
                </td>
                <div class="resize-container">
                <div class="resize-drag">
                Resize 
                </div>
                </div>
               
              </tr>
              <tr>
               
              </tr>
              <tr>
             
              </tr>
              <tr>
             
              </tr>
              <tr>
                <td className="hour" rowSpan="4">
                  <span>Fri</span>
                </td>
                <div class="resize-container">
                <div class="resize-drag">
                Resize 
                </div>
                </div>
               
              </tr>
              <tr>
                
              </tr>
              <tr>
                
              </tr>
              <tr>
               
              </tr>
              <tr>
                <td className="hour" rowSpan="4">
                  <span>Sat</span>
                </td>
                <div class="resize-container">
                <div class="resize-drag">
                Resize 
                </div>
                </div>
               
              </tr>
              <tr>
               
              </tr>
              <tr>
               
              </tr>
              <tr>
               
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Profile;
