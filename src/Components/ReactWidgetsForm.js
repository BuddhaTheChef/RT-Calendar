import React, {Component} from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';
import SelectList from 'react-widgets/lib/SelectList'
import DateTimePicker from 'react-widgets/lib/DateTimePicker'
import 'react-widgets/dist/css/react-widgets.css'
import moment from 'moment'
import momentLocaliser from 'react-widgets-moment'
import { createEvent } from '../actions';
import history from '../history';

momentLocaliser(moment)


const renderSelectList = ({ input, data }) =>
  <SelectList {...input}
    onBlur={() => input.onBlur()}
    data={data} />

const renderDateTimePicker = ({ input: { onChange, value }}) =>
  <DateTimePicker
    time={true}
    onChange={onChange}
    format="DD MMM YYYY"
    value={!value ? null : new Date(value)}
  />


 class ReactWidgetsForm extends Component {
     
    onSubmit = (formValues) => {
        console.log(this.props)
        console.log(formValues)
        this.props.createEvent(formValues).then(()=> {
        history.push('/')
        })
        
     }
  
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props
  return (
    <form onSubmit={handleSubmit(this.onSubmit)} style={{height: '500px', padding:'35px 83px 61px 83px',display:'flex', flexDirection:'column',justifyContent:'space-evenly', color: 'whitesmoke', background: 'rgb(60,60,60)'}}>
    <h1 style={{textAlign: 'center', marginBottom: 0}}>Upcoming Events</h1>
    <div style={{display: 'flex',flexDirection: 'column', justifyContent:'space-between', height:'80px'}}>
        <label style={{fontSize: '22px'}}>Item Name</label>
        <div>
          <Field name="itemName" component="input" type="text" style={{ width:'100%', height:'44px', fontSize:'20px', borderRadius: '5px'}}/>
        </div>
      </div>
      <div style={{height: '80px',display: 'flex', justifyContent:'space-between', flexDirection: 'column'}}>
        <label style={{fontSize: '20px'}}>Bill/Event</label>
        <Field
          name="type"
          component={renderSelectList}
          data={[ 'Bills', 'Events' ]} style={{fontSize:'17px'}}/>
      </div>
      <div style={{height: '79px', flexDirection: 'column', justifyContent: 'space-between', display:'flex', marginBottom: '10px'}}>
        <label style={{fontSize: '18px'}}>DATE</label>
        <Field
          name="date"
          showTime={false}
          component={renderDateTimePicker}
        />
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <button type="submit" disabled={pristine || submitting} className="ui inverted blue button" style={{marginRight: '20px'}}>Submit</button>
        <button type="button" disabled={pristine || submitting} className="ui inverted purple button" style={{marginLeft: '20px'}} onClick={reset}>Reset Values
        </button>
      </div>
    </form>
  )
}
 }

ReactWidgetsForm = reduxForm({
  form: 'eventCreate'  
})(ReactWidgetsForm)

export default connect(null, {createEvent})(ReactWidgetsForm);