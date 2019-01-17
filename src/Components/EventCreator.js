import React,{Component} from 'react';
import {Field, reduxForm} from 'redux-form';

class EventCreator extends Component {
    renderInput(formProps) {
        return (
            <div className="field">
                <label>{formProps.label}</label>
                <input {...formProps.input} />
            </div>
        
        )
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Event Creator</h1>
                <form className="ui form">
                    <Field name="title" label="Enter Title" component={this.renderInput}/>
                    <Field name="description" label="Enter Desciption" component={this.renderInput} />
                </form>
            </div>
        )
    }
}

export default reduxForm({
    form: 'eventCreate'
})(EventCreator);