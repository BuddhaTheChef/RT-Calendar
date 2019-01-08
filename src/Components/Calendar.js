import React, { Component } from "react";

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
        <table>
          <tbody>
            <tr>
              <th className="day-name">Sun</th>
              <th className="day-name">Mon</th>
              <th className="day-name">Tue</th>
              <th className="day-name">Wed</th>
              <th className="day-name">Thu</th>
              <th className="day-name">Fri</th>
              <th className="day-name">Sat</th>
            </tr>
            <tr>
              <td className="day">
                <span className="number">31</span>
              </td>
              <td className="day">
                <span className="number">1</span>
              </td>
              <td className="day">
                <span className="number">2</span>
              </td>
              <td className="day">
                <span className="number">3</span>
              </td>
              <td className="day">
                <span className="number">4</span>
              </td>
              <td className="day">
                <span className="number">5</span>
              </td>
              <td className="day">
                <span className="number">6</span>
              </td>
            </tr>
            <tr>
              <td className="day today">
                <span className="number">7</span>
              </td>
              <td className="day">
                <span className="number">8</span>
              </td>
              <td className="day">
                <span className="number">9</span>
              </td>
              <td className="day">
                <span className="number">10</span>
              </td>
              <td className="day">
                <span className="number">11</span>
              </td>
              <td className="day">
                <span className="number">12</span>
              </td>
              <td className="day">
                <span className="number">13</span>
              </td>
            </tr>
            <tr>
              <td className="day">
                <span className="number">14</span>
              </td>
              <td className="day">
                <span className="number">15</span>
              </td>
              <td className="day">
                <span className="number">16</span>
              </td>
              <td className="day">
                <span className="number">17</span>
              </td>
              <td className="day">
                <span className="number">18</span>
              </td>
              <td className="day">
                <span className="number">19</span>
              </td>
              <td className="day">
                <span className="number">20</span>
              </td>
            </tr>
            <tr>
              <td className="day">
                <span className="number">21</span>
              </td>
              <td className="day">
                <span className="number">22</span>
              </td>
              <td className="day">
                <span className="number">23</span>
              </td>
              <td className="day">
                <span className="number">24</span>
              </td>
              <td className="day">
                <span className="number">25</span>
              </td>
              <td className="day">
                <span className="number">26</span>
              </td>
              <td className="day">
                <span className="number">27</span>
              </td>
            </tr>
            <tr>
              <td className="day">
                <span className="number">28</span>
              </td>
              <td className="day">
                <span className="number">29</span>
              </td>
              <td className="day">
                <span className="number">30</span>
              </td>
              <td className="day">
                <span className="number">1</span>
              </td>
              <td className="day">
                <span className="number">2</span>
              </td>
              <td className="day">
                <span className="number">3</span>
              </td>
              <td className="day">
                <span className="number">4</span>
              </td>
            </tr>
            <tr>
              <td className="day">
                <span className="number">5</span>
              </td>
              <td className="day">
                <span className="number">6</span>
              </td>
              <td className="day">
                <span className="number">7</span>
              </td>
              <td className="day">
                <span className="number">8</span>
              </td>
              <td className="day">
                <span className="number">9</span>
              </td>
              <td className="day">
                <span className="number">10</span>
              </td>
              <td className="day">
                <span className="number">11</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Calendar;
