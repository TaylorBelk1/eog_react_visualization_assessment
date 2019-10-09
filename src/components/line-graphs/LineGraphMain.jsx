import React from 'react';
import { useSelector } from 'react-redux';
import { LineChartWrapper } from '../../styled-components/lineGraphStyles';
import { convertEpochToLocalTime } from '../../store/utils';
import LineGraph from './LineGraph';

const getGraphData = state => {
    const {
        data,
    } = state.measurementReducer;
    const { currentlySelected } = state.measurementReducer;
    return {
        data,
        currentlySelected
    }
}

const LineGraphMain = (props) => {
    const colors = ['#C33C54', '#731DD8', '#53DD6C', '#7C8483', '#00CC99', '#53F4FF'];
    const times = [];
    const {
        data,
        currentlySelected
     } = useSelector(getGraphData);

    const verifyUniq = (time) => {
        const newTime = time.sort().filter((item, pos, ary) => {
            return !pos || item !== ary[pos - 1];
        })
        return newTime
    }

    const changeToLocal = (time) => {
        return time.map(t => convertEpochToLocalTime(t));
    }

    const reformatData = (data, color) => {
        const tempData = {
            data: [],
            borderWidth: 1,
            borderColor: color,
            backgroundColor: color,
            label: data[0].metric,
            fill: false,
            pointRadius: 0,
            yAxisID: data[0].unit
        }
        data.map(item => {
            tempData.data.push(item.value);
            times.push(item.at)
            return null;
        });
        return tempData
    };

    const newData = currentlySelected.map(i => {
        let temp;
        if(i === "tubingPressure") temp = reformatData(data.tubingPressure, colors[0]);
        if(i === "flareTemp") temp = reformatData(data.flareTemp, colors[1]);
        if(i === "injValveOpen") temp = reformatData(data.injValveOpen, colors[2]);
        if(i === "oilTemp") temp = reformatData(data.oilTemp, colors[3]);
        if(i === "casingPressure") temp = reformatData(data.casingPressure, colors[4]);
        if(i === "waterTemp") temp = reformatData(data.waterTemp, colors[5]);

        return temp
    })

    let labels = verifyUniq(times)
    labels = changeToLocal(labels);

    return (
        <LineChartWrapper hidden={currentlySelected.length > 0 ? false : true}>
            <LineGraph data={newData} labels={labels} />
        </LineChartWrapper>
    )
}

export default LineGraphMain