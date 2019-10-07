import React, { useState, useEffect } from 'react';
import MetricsMain from './metrics/MetricsMain';
import { connect } from 'react-redux';
import { setInitValues, setMeasurements } from '../store/actions';
import { useQuery } from 'urql';
import { getMultipleMeasurements } from './queryStrings';
import { subtractMinutes } from '../store/utils';

const BodyWrapper = (props) => {
    const [startTime, setStartTime] = useState();

    useEffect(() => {
        setStartTime(subtractMinutes(Date.now()));
    }, [])

    console.log(startTime)
    const measurements = [
        {
          metricName: "tubingPressure",
          after: startTime,
        },
        {
          metricName: "flareTemp",
          after: startTime,
        },
        {
          metricName: "injValveOpen",
          after: startTime,
        },
        {
          metricName: "oilTemp",
          after: startTime,
        },
        {
          metricName: "casingPressure",
          after: startTime,
        },
        {
          metricName: "waterTemp",
          after: startTime,
        }
    ]

    const [{ fetching, data, error }] = useQuery({
        query: getMultipleMeasurements,
        variables: { measurements }
    });

    if(fetching) {
        console.log('fetching..')
        return 'Loading....'
    } else if(error) {
        return 'Error...'
    }

    props.setInitValues(data.getMultipleMeasurements);

    // SUB LOGIC START

    return (
        <>
            <MetricsMain />
        </>
    )
}

// const mstp = state => {
//     return {
//         measurements: state.data,
//         loading: state.loading
//     }
// }

export default connect(null, { setInitValues, setMeasurements })(BodyWrapper)