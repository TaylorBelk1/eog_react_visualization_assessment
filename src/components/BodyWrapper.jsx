import React, { useState, useEffect } from 'react';
import MetricsMain from './metrics/MetricsMain';
import { useDispatch } from 'react-redux';
import { useQuery } from 'urql';
import { getMultipleMeasurements } from './queryStrings';
import { subtractMinutes } from '../store/utils';
import Loading from './Loading';
import * as actions from '../store/actions';

const BodyWrapper = () => {
    const [startTime, setStartTime] = useState();
    const dispatch = useDispatch();

    useEffect(() => {
        setStartTime(subtractMinutes(Date.now()));
    }, [])

    const metricTitles = [
      "tubingPressure",
      "flareTemp",
      "injValveOpen",
      "oilTemp",
      "casingPressure",
      "waterTemp",
    ]

    const createMeasurementQueryArray = (title) => {
      return {
        metricName: title,
        after: startTime
      }
    }

    const measurements = metricTitles.map(title => {
      return createMeasurementQueryArray(title);
    })

    const [{ fetching, data, error }] = useQuery({
        query: getMultipleMeasurements,
        variables: { measurements }
    });

    if(fetching) {
        return <Loading />
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