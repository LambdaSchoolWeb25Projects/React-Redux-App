// import actions

import {
    FETCH_EARTHQUAKE,
    FETCH_EARTHQUAKE_SUCCESS,
    FETCH_EARTHQUAKE_FAIL,
} from '../actions/earthquakeactions';

// set state in the reducer
// initial
// loading or fetching
// success
// error

const initialState = {
    joke: {},
    isFetching: false,
    error: ''
};

// Are we dispatching actions from the reducer or mapping those actions?
// and if we are mapping the actions ... where do they go to from here, the components?

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_EARTHQUAKE:
            return {
                ...state,
                isFetching: true
            };
            case FETCH_EARTHQUAKE_SUCCESS:
            return {
                ...state,
                earthquake: action.payload,
                isFetching: false,
                error: ''
            };
            case FETCH_EARTHQUAKE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
            // returns initial state
            default:
                return state;
    }
};

export default reducer;