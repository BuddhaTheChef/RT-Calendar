import React, {Component} from 'react';
import { connect } from 'react-redux';
import {fetchEvents, createEvent, deleteEvent} from '../actions';
import {Field, reduxForm, reset} from 'redux-form';
import {Link, withRouter} from 'react-router-dom';

class SideBar extends Component { 
    componentDidMount(){
        this.props.fetchEvents();
      }

      groceryDeleteMethod(event) {
        if(event.userId === this.props.currentUserId && event.grocery) {
           return (
               <div className="right floated content" style={{display: 'inline', float: 'right'}}>
                 <button style={{backgroundColor: '#6435c9' }} onClick={() => this.props.deleteEvent(event.id) } className="ui button">X</button>
               </div>
           )
        }
      }

      billsDeleteMethod(event) {
      if(event.userId === this.props.currentUserId && event.type === 'Bills') {
         return (
             <div className="right floated content" style={{display: 'inline', float: 'right'}}>
               <button style={{backgroundColor: '#6435c9' }} onClick={() => this.props.deleteEvent(event.id) } className="ui button">X</button>
             </div>
         )
      }
    }

    eventDeleteMethod(event) {
      if(event.userId === this.props.currentUserId && event.type === 'Events') {
         return (
             <div className="right floated content" style={{display: 'inline', float: 'right'}}>
               <button style={{backgroundColor: '#6435c9' }} onClick={() => this.props.deleteEvent(event.id) } className="ui button">X</button>
             </div>
         )
      }
    }

      renderGrocery() {
        return this.props.events.map(event => {
            if(event.userId === this.props.currentUserId) {
          return (
            <div className="renderInputDiv" key={event.id}>
              <div className="content" style={{display: 'inline'}}>
                {event.grocery}
              </div>
              {this.groceryDeleteMethod(event)}
            </div>
          )
        }
        else {
            return null;
        }
        })
      }
      renderBills() {
        return this.props.events.map(event => {
            if(event.userId === this.props.currentUserId && event.type === "Bills") {
          return (
            <div className="renderInputDiv" key={event.id}>
              <div className="content" style={{display: 'inline'}}>
                {event.itemName}
              </div>
              {this.billsDeleteMethod(event)}
            </div>
          )
        }
        else {
            return null;
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
              {this.eventDeleteMethod(event)}
            </div>
          )
         }
         else {
             return null;
         }
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
                    <Link to='/create' style={{marginLeft: '16px', color: 'whitesmoke'}}><i className="plus circle icon"></i> Add</Link>
                 </h4> 
               </div>
               <div className="sidebar-task-2-div-bottom" style={{fontStyle: 'italic', fontSize: '18px', lineHeight: '1.5'}}>
               {this.renderBills()}</div>
               <div className="sidebar-task-3-div-top">
                 <h4 className="color-3-identify">
                    Special Events
                    <Link to='/create' style={{marginLeft: '16px', color: 'whitesmoke'}}><i className="plus circle icon"></i>Add</Link>
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

export default withRouter(connect(mapStateToProps, { fetchEvents, createEvent, deleteEvent })(formWrapped));