import React, { useState } from 'react';
import MetricsMain from './metrics/MetricsMain';
import LineGraphMain from './line-graphs/LineGraphMain';
import { connect } from 'react-redux';
import { setMeasurements, setLoading } from '../store/actions';

const BodyWrapper = (props) => {
    const [viewChart, setViewChart] = useState(false);
    const [selectedTab, setSelectedTab] = useState();

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

export default connect(mstp, { setMeasurements, setLoading })(BodyWrapper)