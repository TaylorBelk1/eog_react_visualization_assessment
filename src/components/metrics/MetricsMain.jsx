import React, {useState} from 'react';
import { useSubscription } from 'urql';
import { useDispatch } from 'react-redux';

import { MetricsWrap, MetricCardsWrap } from '../../styled-components/metricCardStyles';
import { getRealTimeMeasurements } from '../queryStrings';
import MetricsCard from './MetricsCard';
import LineGraphMain from '../line-graphs/LineGraphMain';
import * as actions from '../../store/actions';

const handleSub = (measurements = [], response) => {
  return [response.data, ...measurements]
};

const MetricsMain = (props) => {
    const [showLineGraph, setShowLineGraph] = useState(false);
    const dispatch = useDispatch();
    const metricTitles = [
        "tubingPressure",
        "flareTemp",
        "injValveOpen",
        "oilTemp",
        "casingPressure",
        "waterTemp",
    ]
    const [res] = useSubscription({
        query: getRealTimeMeasurements, handleSub
      });

    dispatch({
        type: actions.NEW_MEASUREMENTS_RECEIVED,
        payload: res.data
    })

    const handleShow = () => setShowLineGraph(true);


    return(
        <MetricsWrap>
            <MetricCardsWrap>
                {metricTitles.map(t => {
                    return <MetricsCard key={t} title={t} handleShow={handleShow} />
                })}
            </MetricCardsWrap>
            {showLineGraph ? <LineGraphMain /> : null}
        </MetricsWrap>
    )
}

export default MetricsMain