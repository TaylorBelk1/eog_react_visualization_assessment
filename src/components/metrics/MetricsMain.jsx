import React from 'react';
import MetricsCard from './MetricsCard';
import { MetricsWrap } from '../../styled-components/metricCardStyles';

const MetricsMain = (props) => {
    // replace with graphql query results
    const metricTitles = [
        'tubingPressure',
        'flareTemp',
        'injValveOpen',
        'oilTemp',
        'casingPressure',
        'waterTemp'
    ];

    return(
        <MetricsWrap>
            {metricTitles.map(t => {
                return <MetricsCard title={t} />
            })}
        </MetricsWrap>
    )
}

export default MetricsMain