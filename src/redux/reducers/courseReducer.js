import * as types from '../actions/actionTypes';

export default function courseReducer(state = [], action) {
    switch (action.type) {
        case types.CREATE_COURSE:
            return [...state, action.course];
        case types.CREATE_COURSE_ERROR:
            return state;
        default:
            return state;
    }
}