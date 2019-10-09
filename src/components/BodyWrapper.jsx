import React, { useState, useEffect } from 'react';
import MetricsMain from './metrics/MetricsMain';
import { useDispatch } from 'react-redux';
import { useQuery } from 'urql';
import { getMultipleMeasurements } from './queryStrings';
import { subtractMinutes } from '../store/utils';
import * as actions from '../store/actions';

const BodyWrapper = (props) => {
    const [startTime, setStartTime] = useState();
    const dispatch = useDispatch();

    useEffect(() => {
        setStartTime(subtractMinutes(Date.now()));
    }, [])

    // #TODO: REFACTOR THIS SO IT IS DRY
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

    dispatch({
      type: actions.SET_INIT_VALUES,
      payload: data.getMultipleMeasurements,
    })

    // SUB LOGIC START

    return (
        <>
            <MetricsMain />
        </>
    )
}

export default BodyWrapper