import events from '../apis/events';
import { SIGN_IN, SIGN_OUT, CREATE_EVENT, FETCH_EVENT, FETCH_EVENTS, DELETE_EVENT, EDIT_EVENT } from './types';

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};

export const createEvent = (formValues) => {
    return async (dispatch) => {
        const response = await events.post('/events', formValues)

        dispatch({type: CREATE_EVENT, payload: response.data})
    }
}

export const fetchEvents = () => {
    return async (dispatch) => {
        const response = await events.get('/events')

        dispatch({type: FETCH_EVENTS, payload: response.data})
    }
}

export const fetchEvent = (id) => {
    return async (dispatch) => {
        const response = await events.get(`/events/${id}`)

        dispatch({type: FETCH_EVENT, payload: response.data})
    }
}

export const deleteEvent = (id) => {
    return async (dispatch) => {
        await events.delete(`/events/${id}`)

        dispatch({type: DELETE_EVENT, payload: id})
    }
}

export const editEvent = (id, formValues) => {
    return async (dispatch) => {
        const response = await events.put(`/events/${id}`, formValues)

        dispatch({type: EDIT_EVENT, payload: response.data})
    }
}