import React from 'react';
import LineGraph from './LineGraph';
import { data } from './dummy-data';

const LineGraphMain = () => {
    return (
        <LineGraph data={data.getMeasurements} />
    )
}

export default LineGraphMain