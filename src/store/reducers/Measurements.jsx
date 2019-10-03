import { convertEpochToLocalTime } from '../utils';
import {
    MEASUREMENT_DATA_RECEIVED
} from '../actions';

const initialState = {
    measurements: [],
    loading: false,
    error: ''
};

export const MeasurementReducer = (state = initialState, action) => {
    switch(action.type) {
        case MEASUREMENT_DATA_RECEIVED:

        // remove anything greater than 30 minutes old

        // add new key:value pair localTime: convertEpochToLocalTime(at)

            return {
                ...state,
                measurements: action.payload
            }
    }
}