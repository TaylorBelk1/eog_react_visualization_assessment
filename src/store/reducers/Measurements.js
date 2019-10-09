import {
    SET_INIT_VALUES,
    SET_SELECTED_DATA,
    NEW_MEASUREMENTS_RECEIVED,
} from '../actions';
// import {
//     convertEpochToLocalTime,
//     subtractMinutes,
// } from '../utils';

const initialState = {
    loading: false,
    data: [],
    currentlySelected: [],
    viewMetricValue: false,
    viewLineGraph: false,
    updatedData: []
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
            console.log(newData.tubingPressure.length)
            return {
                ...state,
                data: newData
            }

        case SET_SELECTED_DATA:
            console.log(action.payload)
            let newTab;
            if(state.currentlySelected.length === 0) {
                newTab = action.payload
            } else {
                newTab = state.currentlySelected.concat(action.payload)
            }
            return {
                ...state,
                currentlySelected: newTab
            }

        case NEW_MEASUREMENTS_RECEIVED:
                let tempData = state.data;
                if(action.payload) {
                    switch(action.payload.newMeasurement.metric) {
                        case "tubingPressure":
                            tempData.tubingPressure.push(action.payload.newMeasurement);
                            tempData.tubingPressure.shift();
                            return {
                                data: tempData
                            }

                            case "flareTemp":
                            tempData.flareTemp.push(action.payload.newMeasurement);
                            tempData.flareTemp.shift();
                            return {
                                data: tempData
                            }

                            case "injValveOpen":
                            tempData.injValveOpen.push(action.payload.newMeasurement);
                            tempData.injValveOpen.shift();
                            return {
                                data: tempData
                            }

                            case "oilTemp":
                            tempData.oilTemp.push(action.payload.newMeasurement);
                            tempData.oilTemp.shift();
                            return {
                                data: tempData
                            }

                            case "casingPressure":
                            tempData.casingPressure.push(action.payload.newMeasurement);
                            tempData.casingPressure.shift();
                            return {
                                data: tempData
                            }

                            case "waterTemp":
                            tempData.waterTemp.push(action.payload.newMeasurement);
                            tempData.waterTemp.shift();
                            return {
                                data: tempData
                            }

                            default:
                                return {
                                    ...state
                                }
                    }
                } else return {...state};

        default:
            return state
    }
}
