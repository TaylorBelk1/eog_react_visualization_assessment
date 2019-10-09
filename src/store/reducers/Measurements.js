import {
    SET_INIT_VALUES,
    SET_SELECTED_DATA,
    NEW_MEASUREMENTS_RECEIVED,
    REMOVE_SELECTED_DATA,
} from '../actions';

const initialState = {
    data: [],
    currentlySelected: [],
    viewLineGraph: false,
};


export const MeasurementReducer = ( state = initialState, action ) => {
    switch(action.type) {

        case SET_INIT_VALUES:
            const newData = {
                tubingPressure: action.payload[0].measurements,
                flareTemp: action.payload[1].measurements,
                injValveOpen: action.payload[2].measurements,
                oilTemp: action.payload[3].measurements,
                casingPressure: action.payload[4].measurements,
                waterTemp: action.payload[5].measurements,
            }
            return {
                ...state,
                data: newData
            }

        case SET_SELECTED_DATA:
            const temp = state.currentlySelected
            temp.push(action.payload.toString());
            return {
                ...state,
                currentlySelected: temp
            }

        case REMOVE_SELECTED_DATA:
            const newTabData = state.currentlySelected.filter(item => {
                return item !== action.payload
            });

            const finalTabData = [];
            newTabData.forEach(item => {
                if(item.length > 0) {
                    finalTabData.push(item);
                }
            })

            return {
                ...state,
                currentlySelected: finalTabData
            }

        case NEW_MEASUREMENTS_RECEIVED:
                let tempData = state.data;
                if(action.payload) {
                    switch(action.payload.newMeasurement.metric) {
                        case "tubingPressure":
                            tempData.tubingPressure.push(action.payload.newMeasurement);
                            tempData.tubingPressure.shift();
                            return {
                                ...state,
                                data: tempData
                            }

                            case "flareTemp":
                            tempData.flareTemp.push(action.payload.newMeasurement);
                            tempData.flareTemp.shift();
                            return {
                                ...state,
                                data: tempData
                            }

                            case "injValveOpen":
                            tempData.injValveOpen.push(action.payload.newMeasurement);
                            tempData.injValveOpen.shift();
                            return {
                                ...state,
                                data: tempData
                            }

                            case "oilTemp":
                            tempData.oilTemp.push(action.payload.newMeasurement);
                            tempData.oilTemp.shift();
                            return {
                                ...state,
                                data: tempData
                            }

                            case "casingPressure":
                            tempData.casingPressure.push(action.payload.newMeasurement);
                            tempData.casingPressure.shift();
                            return {
                                ...state,
                                data: tempData
                            }

                            case "waterTemp":
                            tempData.waterTemp.push(action.payload.newMeasurement);
                            tempData.waterTemp.shift();
                            return {
                                ...state,
                                data: tempData
                            }

                            default:
                                return {
                                    ...state
                                }
                    }
                } else return {...state};

        default:
            return {...state}
    }
}
