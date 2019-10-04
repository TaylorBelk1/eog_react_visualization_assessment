export const API_ERROR = 'EVENT/API_ERROR_RECEIVED';
export const WEATHER_DATA_RECEIVED = 'EVENT/WEATHER_DATA_RECEIVED';

export const NEW_MEASUREMENTS_RECEIVED = "NEW_MEASUREMENTS_RECEIVED";
export const LOADING = "LOADING";


export const setMeasurements = (data) => {
    console.log('RUNNING FROM SETMEASUREMENTS:', data);
    return {
        type: NEW_MEASUREMENTS_RECEIVED,
        payload: data
    }
}

export const setLoading = (status) => {
    return {
        type: LOADING,
        payload: status
    }
}