// import axios to retrieve data

import axios from 'axios';

// add async action creator and set to string to avoid typos

export const FETCH_EARTHQUAKE = 'FETCH_EARTHQUAKE';
export const FETCH_EARTHQUAKE_SUCCESS = 'FETCH_EARTHQUAKE_SUCCESS';
export const FETCH_EARTHQUAKE_FAIL = 'FETCH_EARTHQUAKE_FAIL';

// add axios .get .post or .edit calls
// const getEarthquake = () => {
//      return dispatch => {
//          dispatch({ type: 'FETCH_EARTHQUAKE' });
//  };
// };

export const getEarthQuake = () => dispatch => {
    dispatch ({ type: FETCH_EARTHQUAKE });
    axios
        .get('')
        .then(res => {
            dispatch({ type: FETCH_EARTHQUAKE_SUCCESS, payload: res.data.value });
        })
        .catch(err => {
            dispatch({ type: FETCH_EARTHQUAKE_FAIL, payload: err.response });
        });
};
