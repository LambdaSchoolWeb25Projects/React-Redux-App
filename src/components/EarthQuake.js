// import connect from react-redux
// import Loader component 
// import getEarthquake from actions

import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { getEarthQuake } from '../actions/earthquakeActions';

// create EarthQuake component

const EarthQuake = props => {
    return (
        <div>
            <h1>What Earthquake? Where?</h1>
            {!props.earthquake && !props.isFetching && <p> Find that Earthquake!</p>}
            {props.isFetching && (
                <Loader type="Puff" color="00BFFF" height={200} width={200} />
            )}
            <p>{props.earthquake}</p>
            <button onClick={props.getEarthQuake}>Get Earthquake!</button>
        </div>
    );
};

// mapStateToProps

const mapStateToProps = state => {
    return {
        earthquake: state.earthquake,
        isFetching: state.isFetching,
        error: state.error
    };
};

// export

export default connect(
    mapStateToProps,
    { getEarthquake }
)(EarthQuake);