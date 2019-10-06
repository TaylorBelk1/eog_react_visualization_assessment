import React, { useEffect, useState } from 'react';
import { getMultipleMeasurements } from '../queryStrings';
import { subtractMinutes } from '../../store/utils';
import { useQuery } from 'urql';

const MetricsCardView = (props) => {
    const [startTime, setStartTime] = useState();

    useEffect(() => {
        setStartTime(subtractMinutes(Date.now()));
    }, [])

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

    return (
        <p>Test</p>
    )
}

export default MetricsCardView