import React from 'react';
import ReactDOM from 'react-dom';
import ReactWidgetsForm from './ReactWidgetsForm';
import history from '../history';

const Modal = (props) => {
    return ReactDOM.createPortal(
        <div onClick={()=>history.push('/')} className="ui dimmer modals visible active">
        <div onClick={(e)=> e.stopPropagation()} className="ui standard modal visible active" style={{borderRadius: '13px'}}>
            <ReactWidgetsForm/>
        </div>
        </div>,
        document.querySelector('#modal')
    )
}

export default Modal;