import {
    NEW_MEASUREMENTS_RECEIVED,
    LOADING
} from '../actions';

import { convertEpochToLocalTime } from '../utils';

const initialState = {
    data: [],
    loading: false,
    error: '',
    tubingPressureData: [],
    flareTempData: [],
    injValveOpenData: [],
    oilTempData: [],
    casingPressureData: [],
    waterTempData: []
};

export const MeasurementReducer = (state = initialState, action) => {
    switch(action.type) {
        case NEW_MEASUREMENTS_RECEIVED:
            const { newMeasurement } = action.payload;
            let newData;

            switch(newMeasurement.metric) {

                case 'tubingPressure':
                    newData = {
                        ...newMeasurement,
                        localTime: convertEpochToLocalTime(newMeasurement.at)
                    }
                    return {
                        ...state,
                        tubingPressureData: state.tubingPressureData.concat(newData)
                    }
                case 'flareTemp':
                    newData = {
                        ...newMeasurement,
                        localTime: convertEpochToLocalTime(newMeasurement.at)
                    }
                    return {
                        ...state,
                        flareTempData: state.flareTempData.concat(newData)
                    }

                case 'injValveOpen':
                    newData = {
                        ...newMeasurement,
                        localTime: convertEpochToLocalTime(newMeasurement.at)
                    }
                    return {
                        ...state,
                        injValveOpenData: state.injValveOpenData.concat(newData)
                    }

                case 'oilTemp':
                    newData = {
                        ...newMeasurement,
                        localTime: convertEpochToLocalTime(newMeasurement.at)
                    }
                    return {
                        ...state,
                        oilTempData: state.oilTempData.concat(newData)
                    }

                case 'casingPressure':
                    newData = {
                        ...newMeasurement,
                        localTime: convertEpochToLocalTime(newMeasurement.at)
                    }
                    return {
                        ...state,
                        casingPressureData: state.casingPressureData.concat(newData)
                    }

                case 'waterTemp':
                    newData = {
                        ...newMeasurement,
                        localTime: convertEpochToLocalTime(newMeasurement.at)
                    }
                    return {
                        ...state,
                        waterTempData: state.waterTempData.concat(newData)
                    }

                default:
                    return {
                        ...state
                    }
            }

        case LOADING:
            return {
                ...state,
                loading: action.payload,
            }
        default:
            return {
                ...state
            }
    }
}