import React, {useState} from 'react';
import MetricsCard from './MetricsCard';
import { MetricsWrap, MetricCardsWrap } from '../../styled-components/metricCardStyles';
import { useSubscription } from 'urql';
import { getRealTimeMeasurements } from '../queryStrings';
import { connect } from 'react-redux';
import { setMeasurements } from '../../store/actions';
import LineGraphMain from '../line-graphs/LineGraphMain';

const handleSub = (measurements = [], response) => {
  return [response.data, ...measurements]
};

const MetricsMain = (props) => {
    const [showLineGraph, setShowLineGraph] = useState(false);
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

    props.setMeasurements(res.data)

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

export default connect(null, { setMeasurements })(MetricsMain)