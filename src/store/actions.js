export const API_ERROR = 'EVENT/API_ERROR_RECEIVED';
export const WEATHER_DATA_RECEIVED = 'EVENT/WEATHER_DATA_RECEIVED';

export const NEW_MEASUREMENTS_RECEIVED = "NEW_MEASUREMENTS_RECEIVED";
export const SET_INIT_VALUES = "SET_INIT_VALUES";
export const UPDATE_MEASUREMENTS = "UPDATE_MEASUREMENTS";
export const SET_SELECTED_DATA = "SET_SELECTED_DATA";

export function setMeasurements (data) {
    return {
        type: NEW_MEASUREMENTS_RECEIVED,
        payload: data,
    }
}

export function setInitValues(values) {
    return {
        type: SET_INIT_VALUES,
        payload: values,
    }
}

export function setCurrentlySelectedData(data) {
    return {
        type: SET_SELECTED_DATA,
        payload: data
    }
}

