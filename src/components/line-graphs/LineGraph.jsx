import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Label } from 'recharts';
import { LineChartWrapper } from '../../styled-components/lineGraphStyles';

const LineGraph = (props) => {

    const { data } = props;

    return (
        <LineChartWrapper>
            <LineChart className="lineChart" width={1200} height={500} data={data} margin={{ bottom: 15 }}>
                <Line type="monotone" dataKey="value" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="at">
                    <Label value="Time Elapsed" offset={-10} position="insideBottom" />
                </XAxis>
                <YAxis label={{ value: 'PSI', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
            </LineChart>
        </LineChartWrapper>
    )
}

export default LineGraph