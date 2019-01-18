import React, {Component} from 'react';
import { connect } from 'react-redux';
import {fetchEvents, createEvent, deleteEvent} from '../actions';
import {Field, reduxForm, reset} from 'redux-form';

class SideBar extends Component { 
    componentDidMount(){
        this.props.fetchEvents();
      }

      groceryDeleteMethod(event) {
        if(event.userId === this.props.currentUserId && event.grocery) {
           return (
               <div className="right floated content" style={{display: 'inline', float: 'right'}}>
                 <button onClick={() => this.props.deleteEvent(event.id) } className="ui button negative">X</button>
               </div>
           )
        }
      }

      billsDeleteMethod(event) {
      if(event.userId === this.props.currentUserId && event.bills) {
         return (
             <div className="right floated content" style={{display: 'inline', float: 'right'}}>
               <button onClick={() => this.props.deleteEvent(event.id) } className="ui button negative">X</button>
             </div>
         )
      }
    }

    eventDeleteMethod(event) {
      if(event.userId === this.props.currentUserId && event.events) {
         return (
             <div className="right floated content" style={{display: 'inline', float: 'right'}}>
               <button onClick={() => this.props.deleteEvent(event.id) } className="ui button negative">X</button>
             </div>
         )
      }
    }

      renderGrocery() {
        return this.props.events.map(event => {
          return (
            <div className="renderInputDiv" key={event.id}>
              <div className="content" style={{display: 'inline'}}>
                {event.grocery}
              </div>
              {this.groceryDeleteMethod(event)}
            </div>
          )
        })
      }
      renderBills() {
        return this.props.events.map(event => {
          return (
            <div className="renderInputDiv" key={event.id}>
              <div className="content" style={{display: 'inline'}}>
                {event.bills}
              </div>
              {this.billsDeleteMethod(event)}
            </div>
          )
        })
      }
      renderEvents() {
        return this.props.events.map(event => {
          return (
            <div className="renderInputDiv" key={event.id}>
              <div className="content" style={{display: 'inline'}}>
                {event.events}
              </div>
              {this.eventDeleteMethod(event)}
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
               <div className="sidebar-task-1-div-bottom" style={{fontStyle: 'italic', fontSize: '18px', lineHeight: '1.5'}}>
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
               <div className="sidebar-task-2-div-bottom" style={{fontStyle: 'italic', fontSize: '18px', lineHeight: '1.5'}}>
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
               <div className="sidebar-task-3-div-bottom" style={{fontStyle: 'italic', fontSize: '18px', lineHeight: '1.5'}}>
               {this.renderEvents()}
               </div>
              
           </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        events: Object.values(state.events),
        currentUserId: state.auth.userId
    }
  }

const afterSubmit = (result, dispatch) =>
  dispatch(reset('eventCreate'));

const formWrapped = reduxForm({
    form: 'eventCreate',
    onSubmitSuccess: afterSubmit,
})(SideBar);

export default connect(mapStateToProps, { fetchEvents, createEvent, deleteEvent })(formWrapped);