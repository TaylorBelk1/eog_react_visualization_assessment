import React from 'react';
import MetricsCard from './MetricsCard';
import { MetricsWrap } from '../../styled-components/metricCardStyles';
import { useQuery } from 'urql';

const getMetricTitles = `
        query GetMetricTitles {
            getMetrics
        }
    `

const MetricsMain = (props) => {
    const [{ fetching, data, error }] = useQuery({
        query: getMetricTitles
    });

    if(fetching) {
        return 'Loading...';
    } else if(error) {
        return `This is not the error you are looking for...
                ERROR: ${error}`
    }

    const metricTitles = data.getMetrics

    return(
        <MetricsWrap>
            {metricTitles.map(t => {
                return <MetricsCard key={t} title={t} viewGraph={props.viewGraph} />
            })}
        </MetricsWrap>
    )
}

export default MetricsMain