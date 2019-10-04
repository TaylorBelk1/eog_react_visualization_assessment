import React, { useEffect } from 'react';
import MetricsMain from './metrics/MetricsMain';
import LineGraphMain from './line-graphs/LineGraphMain';
import { useQuery } from 'urql';
import {
    getMetricTitles,
    getRealTimeMeasurements
} from './queryStrings';

const query = `
    query getMeasurementsQuery ($metricArray: [MeasurementQuery]) {
        getMultipleMeasurements(input: $metricArray) {
            metric
            measurements {
                metric
                at
                value
                unit
            }
        }
    }
`

// this component will wrap the main components in the body and perform all
// the logic, allowing the child components to simply focus on displaying
//data
const BodyWrapper = () => {
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
    const metArray = metricTitles.map(title => {
        return {
            metricName: title,
            after: ''
        }
    });


    return (
        <div>
            <MetricsMain />
            <LineGraphMain />
        </div>
    )
}

export default BodyWrapper