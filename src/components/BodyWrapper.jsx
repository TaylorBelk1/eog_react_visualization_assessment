import React, { useState, useEffect } from 'react';
import MetricsMain from './metrics/MetricsMain';
import LineGraphMain from './line-graphs/LineGraphMain';
import { connect } from 'react-redux';
import { setInitValues } from '../store/actions';
import { useQuery } from 'urql';
import { getMultipleMeasurements } from './queryStrings';
import { subtractMinutes } from '../store/utils';

const BodyWrapper = (props) => {
    const [viewChart, setViewChart] = useState(false);
    const [selectedTab, setSelectedTab] = useState();
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

    const handleGraphViewStatus = (status, selectedTab) => {
        setViewChart(status);
        console.log(selectedTab);
    }

    return (
        <div>
            <MetricsMain viewGraph={handleGraphViewStatus}/>
            {viewChart ?
                <LineGraphMain /> :
                <p>Click a tab to see the graph</p>
            }

        </div>
    )
}

const mstp = state => {
    return {
        measurements: state.data,
        loading: state.loading
    }
}

export default connect(mstp, { setInitValues })(BodyWrapper)