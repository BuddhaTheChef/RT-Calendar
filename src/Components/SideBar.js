import React, {Component} from 'react';
import { connect } from 'react-redux';
import {fetchEvents, createEvent} from '../actions';
import {Field, reduxForm, reset} from 'redux-form';

class SideBar extends Component { 
    componentDidMount(){
        this.props.fetchEvents();
      }
      renderGrocery() {
        return this.props.events.map(event => {
          return (
            <div className="" key={event.id}>
              <div className="content">
                {event.grocery}
              </div>
            </div>
          )
        })
      }
      renderBills() {
        return this.props.events.map(event => {
          return (
            <div className="" key={event.id}>
              <div className="content">
                {event.bills}
              </div>
            </div>
          )
        })
      }
      renderEvents() {
        return this.props.events.map(event => {
          return (
            <div className="" key={event.id}>
              <div className="content">
                {event.events}
              </div>
            </div>
          )
        })
      }

      renderInput = (formProps) => {
        const className = `field ${formProps.meta.error && formProps.meta.touched ? 'error' : ''}`;
        return (
            <div className={className}>
                <label>{formProps.label}</label>
                <input style={{height: 'fit-content', marginTop: '10px', marginLeft: '7px'}} {...formProps.input} />
            </div>
        
        )
    }

    onSubmit = (formValues) => {
        this.props.createEvent(formValues)
    }

    render() {
        return (
            <div className="calendar-sidebar-div">
            <h2 style={{textAlign: 'center', marginTop: '20px'}}>This Months Events</h2>
               <div className="sidebar-task-1-div-top">
                 <h4 className="color-1-identify">
                 Grocery List
                    <span>
                    <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                    <Field name="grocery" component={this.renderInput}/>
                    <button style={{display:'none'}} className="ui button primary">o</button>
                </form>
                    </span>
                 </h4>
               </div>
               <div className="sidebar-task-1-div-bottom" style={{fontStyle: 'italic', fontSize: '18px'}}>
               {this.renderGrocery()}
               </div>
               <div className="sidebar-task-2-div-top">
                 <h4 className="color-2-identify">
                    Check & Bills
                    <span>
                    <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                    <Field name="bills" component={this.renderInput} />
                    <button style={{display:'none'}} className="ui button primary">o</button>
                </form>
                    </span>
                 </h4> 
               </div>
               <div className="sidebar-task-2-div-bottom" style={{fontStyle: 'italic', fontSize: '18px'}}>
               {this.renderBills()}</div>
               <div className="sidebar-task-3-div-top">
                 <h4 className="color-3-identify">
                    Special Events
                    <span>
                    <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                    <Field name="events" component={this.renderInput} />
                    <button style={{display:'none'}} className="ui button primary">o</button>
                    </form>
                    </span>
                </h4>
               </div>
               <div className="sidebar-task-3-div-bottom" style={{fontStyle: 'italic', fontSize: '18px'}}>
               {this.renderEvents()}
               </div>
              
           </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {events: Object.values(state.events)}
  }

const afterSubmit = (result, dispatch) =>
  dispatch(reset('eventCreate'));

const formWrapped = reduxForm({
    form: 'eventCreate',
    onSubmitSuccess: afterSubmit,
})(SideBar);

export default connect(mapStateToProps, { fetchEvents, createEvent })(formWrapped);