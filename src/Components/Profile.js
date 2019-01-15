import React, { Component } from "react";
import interact from "interactjs";
import moment from 'moment';

class Profile extends Component {
  render() {
    interact(".resize-drag")
      .draggable({
        onmove: window.dragMoveListener,
        restrict: {
          restriction: "parent",
          elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
        }
      })
      .resizable({
        // resize from all edges and corners
        edges: { left: false, right: true, bottom: false, top: false },

        // keep the edges inside the parent
        restrictEdges: {
          outer: "parent",
          endOnly: true
        },

        // minimum size
        restrictSize: {
          min: { width: 100, height: 50 }
        },

        inertia: true
      })
      .on("resizemove", function(event) {
        var target = event.target,
          x = parseFloat(target.getAttribute("data-x")) || 0,
          y = parseFloat(target.getAttribute("data-y")) || 0;

        // update the element's style
        target.style.width = event.rect.width + "px";
        target.style.height = event.rect.height + "px";

        // translate when resizing from top or left edges
        x += event.deltaRect.left;
        y += event.deltaRect.top;

        target.style.webkitTransform = target.style.transform =
          "translate(" + x + "px," + y + "px)";

        target.setAttribute("data-x", x);
        target.setAttribute("data-y", y);
      });

    interact(".draggable").draggable({
      // enable inertial throwing
      inertia: true,
      // keep the element within the area of it's parent
      restrict: {
        restriction: "parent",
        endOnly: true,
        elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
      },
      // enable autoScroll
      autoScroll: true,

      // call this function on every dragmove event
      onmove: dragMoveListener
      // call this function on every dragend event
    });

    function dragMoveListener(event) {
      var target = event.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx,
        y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;

      // translate the element
      target.style.webkitTransform = target.style.transform =
        "translate(" + x + "px, " + y + "px)";

      // update the posiion attributes
      target.setAttribute("data-x", x);
      target.setAttribute("data-y", y);
    }

    // this is used later in the resizing and gesture demos
    window.dragMoveListener = dragMoveListener;


var startOfWeek = moment().startOf('isoWeek');
var endOfWeek = moment().endOf('isoWeek');

var days = [];
var day = startOfWeek;

while (day <= endOfWeek) {
    days.push(day.format("ddd DD"));
    day = day.clone().add(1, 'd');
}

var cool = (days);

    return (
      <div>
        <div className="event-div">
          <h1 className="event-main-title">This Weeks Events</h1>
        </div>
        <div style={{ marginTop: "90px" }}>
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
                  <span className="short" style={{lineHeight: '1.5'}}>{cool[0]}</span>
                </td>

                <div className="resize-container">
                  <div className="draggable" id="drag-2">
                    <div className="resize-drag">
                      <p>Resize</p>
                    </div>
                  </div>
                </div>
              </tr>
              <tr />
              <tr />
              <tr />
              <tr>
                <td className="hour" rowSpan="4">
                  <span style={{lineHeight: '1.5'}}>{cool[1]}</span>
                </td>
                <div className="resize-container">
                  <div className="draggable" id="drag-2">
                    <div className="resize-drag">
                      <p>Resize</p>
                    </div>
                  </div>
                </div>
              </tr>
              <tr />
              <tr />
              <tr />

              <tr>
                <td className="hour" rowSpan="4">
                  <span style={{lineHeight: '1.5'}}>{cool[2]}</span>
                </td>
                <div className="resize-container">
                  <div className="draggable" id="drag-2">
                    <div className="resize-drag">
                      <p>Resize</p>
                    </div>
                  </div>
                </div>
              </tr>
              <tr />
              <tr />
              <tr />
              <tr>
                <td className="hour" rowSpan="4">
                  <span style={{lineHeight: '1.5'}}>{cool[3]}</span>
                </td>
                <div className="resize-container">
                  <div className="draggable" id="drag-2">
                    <div className="resize-drag">
                      <p>Resize</p>
                    </div>
                  </div>
                </div>
              </tr>
              <tr />
              <tr />
              <tr />
              <tr>
                <td className="hour" rowSpan="4">
                  <span style={{lineHeight: '1.5'}}>{cool[4]}</span>
                </td>
                <div className="resize-container">
                  <div className="draggable" id="drag-2">
                    <div className="resize-drag">
                      <p>Resize</p>
                    </div>
                  </div>
                </div>
              </tr>
              <tr />
              <tr />
              <tr />
              <tr>
                <td className="hour" rowSpan="4">
                  <span style={{lineHeight: '1.5'}}>{cool[5]}</span>
                </td>
                <div className="resize-container">
                  <div className="draggable" id="drag-2">
                    <div className="resize-drag">
                      <p>Resize</p>
                    </div>
                  </div>
                </div>
              </tr>
              <tr />
              <tr />
              <tr />
              <tr>
                <td className="hour" rowSpan="4">
                  <span style={{lineHeight: '1.5'}}>{cool[6]}</span>
                </td>
                <div className="resize-container">
                  <div className="draggable" id="drag-2">
                    <div className="resize-drag">
                      <p>Resize</p>
                    </div>
                  </div>
                </div>
              </tr>
              <tr />
              <tr />
              <tr />
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Profile;
