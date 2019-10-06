export const API_ERROR = 'EVENT/API_ERROR_RECEIVED';
export const WEATHER_DATA_RECEIVED = 'EVENT/WEATHER_DATA_RECEIVED';
export const NEW_MEASUREMENTS_RECEIVED = "NEW_MEASUREMENTS_RECEIVED";
export const SET_INIT_VALUES = "SET_INIT_VALUES";
export const SET_CURRENT_TABS = "SET_CURRENT_TABS";
export const UPDATE_MEASUREMENTS = "UPDATE_MEASUREMENTS";
export const TOGGLE_SHOW_CARD_VALUE = "TOGGLE_SHOW_CARD_VALUE";
export const TOGGLE_SHOW_LINE_GRAPH = "TOGGLE_SHOW_LINE_GRAPH";

export function setMeasurements (data) {
    console.log('RUNNING FROM SETMEASUREMENTS:', data);
    return {
        type: NEW_MEASUREMENTS_RECEIVED,
        payload: data,
    }
}

export function setInitValues(values) {
    console.log('FROM setInitValues: ', values);
    return {
        type: SET_INIT_VALUES,
        payload: values,
    }
}

export function setCurrentTabs (title) {
    console.log('FROM setCurrentTabs: ', title);
    return {
        type: "SET_CURRENT_TABS",
        payload: title,
    }
}

export function updateMeasurements (measurement) {
    console.log('FROM updateMeasurements: ', measurement);
    return {
        type: UPDATE_MEASUREMENTS,
        payload: measurement,
    }
}

export function setShowMetricValues (bool) {
    console.log('FROM setShowMetricValues', bool);
    return {
        type: "TOGGLE_SHOW_CARD_VALUE",
        payload: bool,
    }
}

export function setShowLineGraph (bool) {
    console.log('FROM setShowLineGraph: ', bool);
    return {
        type: TOGGLE_SHOW_LINE_GRAPH,
        payload: bool,
    }
}