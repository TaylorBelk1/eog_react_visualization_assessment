import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


const getTabData = state => {
    const {
        tubingPressure,
        flareTemp,
        injValveOpen,
        oilTemp,
        casingPressure,
        waterTemp
    } = state.measurementReducer.data;
    return {
        tubingPressure,
        flareTemp,
        injValveOpen,
        oilTemp,
        casingPressure,
        waterTemp
    }
}

const MetricsCardView = (props) => {
    const [tab, setTab] = useState();
    const {
        tubingPressure,
        flareTemp,
        injValveOpen,
        oilTemp,
        casingPressure,
        waterTemp
    } = useSelector(getTabData);

    useEffect(() => {
        switch(props.title) {
            case "tubingPressure":
                setTab(tubingPressure);
                break;
            case "flareTemp":
                setTab(flareTemp);
                break;
            case "injValveOpen":
                setTab(injValveOpen);
                break;
            case "oilTemp":
                setTab(oilTemp);
                break;
            case "casingPressure":
                setTab(casingPressure);
                break;
            case "waterTemp":
                setTab(waterTemp);
                break;
            default:
                setTab(null);
                break;
        }
    }, [
        props.title,
        tubingPressure,
        flareTemp,
        injValveOpen,
        oilTemp,
        casingPressure,
        waterTemp
    ])

    return (
        <div>
            {tab && tab[tab.length -1].value}
        </div>
    )
}

export default MetricsCardView