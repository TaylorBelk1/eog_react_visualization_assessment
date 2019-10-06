import {
    // NEW_MEASUREMENTS_RECEIVED,
    SET_INIT_VALUES,
    SET_CURRENT_TABS,
    UPDATE_MEASUREMENTS,
    TOGGLE_SHOW_CARD_VALUE,
    TOGGLE_SHOW_LINE_GRAPH
} from '../actions';
import {
    convertEpochToLocalTime,
    subtractMinutes
} from '../utils';

const initialState = {
    loading: false,
    data: [],
    tubingPressureData: [],
    flareTempData: [],
    injValveOpenData: [],
    oilTempData: [],
    casingPressureData: [],
    waterTempData: [],
    currentTabs: [],
    viewMetricValue: false,
    viewLineGraph: false,
};


export const MeasurementReducer = ( state = initialState, action ) => {
    let newData = [];
    let measurements = action.payload
    console.log(action.payload)
    switch(action.type) {

        case SET_INIT_VALUES:
            measurements.map(obj => {
                obj.measurements.forEach(item => {
                    let newItem = {
                        ...item,
                        localTime: convertEpochToLocalTime(item.at)
                    }
                    newData.push(newItem)
                })
            })
            return {
                ...state,
                data: newData
            }

        case SET_CURRENT_TABS:
            console.log('Set current tabs toggled')
            return {
                ...state,
                currentTabs: action.payload,
            }

        case TOGGLE_SHOW_CARD_VALUE:
            console.log('Metric Value View Toggled');
            return {
                ...state,
                viewMetricValue: action.payload,
            }

        case TOGGLE_SHOW_LINE_GRAPH:
            return {
                ...state,
                viewLineGraph: action.payload
            }

        case UPDATE_MEASUREMENTS:
            let cutOff = subtractMinutes(Date.now());
            let newItem = {
                ...action.payload,
                localTime: convertEpochToLocalTime(action.payload.at)
            }
            let data = state.data
            data.concat(newItem);
            let oldDataRemoved = data.filter(item => {
                return item.at > cutOff
            })
            return {
                ...state,
                data: oldDataRemoved
            }

        default:
            return state
    }
}
