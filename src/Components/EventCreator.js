import React,{Component} from 'react';
import {Field, reduxForm, reset} from 'redux-form';
import { connect } from 'react-redux';
import { createEvent } from '../actions';

class EventCreator extends Component {
    renderError({error, touched}) {
        if(touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            )
        }
    }

    renderInput = (formProps) => {
        const className = `field ${formProps.meta.error && formProps.meta.touched ? 'error' : ''}`;
        return (
            <div className={className}>
                <label>{formProps.label}</label>
                <input {...formProps.input} />
                {this.renderError(formProps.meta)}
            </div>
        
        )
    }

    onSubmit = (formValues) => {
        this.props.createEvent(formValues)
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Event Creator</h1>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                    <Field name="grocery" label="Grocery" component={this.renderInput}/>
                    <Field name="bills" label="Bill" component={this.renderInput} />
                    <Field name="events" label="Event" component={this.renderInput} />
                    <button className="ui button primary">Submit</button>
                </form>
            </div>
        )
    }
}

const validate = (formValues) => {
}

const afterSubmit = (result, dispatch) =>
  dispatch(reset('eventCreate'));

const formWrapped = reduxForm({
    form: 'eventCreate',
    validate,
    onSubmitSuccess: afterSubmit,
})(EventCreator);

export default connect(null, {createEvent})(formWrapped);