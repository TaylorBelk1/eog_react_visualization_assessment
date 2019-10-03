import React from 'react';
import MetricsCard from './MetricsCard';
import * as actions from '../../store/actions';
import { MetricsWrap } from '../../styled-components/metricCardStyles';
import { useQuery } from 'urql';

const getMetricTitles = `
        query GetMetricTitles {
            getMetrics
        }
    `

const MetricsMain = () => {
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
                return <MetricsCard key={t} title={t} />
            })}
        </MetricsWrap>
    )
}

export default MetricsMain