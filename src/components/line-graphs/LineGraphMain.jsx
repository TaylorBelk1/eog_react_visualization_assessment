import React from 'react';
import LineGraph from './LineGraph';
import { data } from './dummy-data';
import { useSubscription } from 'urql';
import { connect } from 'react-redux';
import { setMeasurements, setLoading } from '../../store/actions';
import {
    getRealTimeMeasurements
} from '../queryStrings';

const handleSub = (measurements = [], response) => {
    return [response.data, ...measurements]
};

const LineGraphMain = (props) => {
    const [res] = useSubscription({
        query: getRealTimeMeasurements, handleSub
    });
    if(!res.data) return <p>No Data</p>

    props.setMeasurements(res.data)


    return (
        <LineGraph data={data.getMeasurements} />
    )
}

const mstp = state => {
    return {
        measurements: state.data,
        loading: state.loading
    }
}

export default connect(mstp, { setMeasurements, setLoading })(LineGraphMain)