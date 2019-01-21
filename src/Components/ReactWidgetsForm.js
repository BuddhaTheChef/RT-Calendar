import React, {Component} from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';
import SelectList from 'react-widgets/lib/SelectList'
import DateTimePicker from 'react-widgets/lib/DateTimePicker'
import 'react-widgets/dist/css/react-widgets.css'
import moment from 'moment'
import momentLocaliser from 'react-widgets-moment'
import { createEvent } from '../actions';


momentLocaliser(moment)


const renderSelectList = ({ input, data }) =>
  <SelectList {...input}
    onBlur={() => input.onBlur()}
    data={data} />

const renderDateTimePicker = ({ input: { onChange, value }, showTime }) =>
  <DateTimePicker
    onChange={onChange}
    format="DD MMM YYYY"
    time={showTime}
    value={!value ? null : new Date(value)}
  />


 class ReactWidgetsForm extends Component {
     
    onSubmit = (formValues) => {
        console.log(this.props)
        console.log(formValues)
        this.props.createEvent(formValues);
     }
  
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props
  return (
    <form onSubmit={handleSubmit(this.onSubmit)}>
    <div>
        <label>Item</label>
        <div>
          <Field name="itemName" component="input" type="text"/>
        </div>
      </div>
      <div>
        <label>Bill/Event</label>
        <Field
          name="type"
          component={renderSelectList}
          data={[ 'Bills', 'Events' ]}/>
      </div>
      <div>
        <label>DATE</label>
        <Field
          name="date"
          showTime={false}
          component={renderDateTimePicker}
        />
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Reset Values
        </button>
      </div>
    </form>
  )
}
 }

ReactWidgetsForm = reduxForm({
  form: 'eventCreate'  // a unique identifier for this form
})(ReactWidgetsForm)

export default connect(null, {createEvent})(ReactWidgetsForm);