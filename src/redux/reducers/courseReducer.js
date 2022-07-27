export default function courseReducer(state = [], action) {
    switch (action.type) {
        case 'CREATE_COURSE':
            return [...state, action.course];
        case 'CREATE_COURSE_ERROR':
            return state;
        default:
            return state;
    }
}