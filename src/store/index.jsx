/* eslint-disable import/no-extraneous-dependencies */
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import sagas from './sagas';
import weatherReducer from './reducers/Weather';
import { MeasurementReducer } from './reducers/Measurements';

export default () => {
  const rootReducer = combineReducers({
    weather: weatherReducer,
    measurements: MeasurementReducer
  });

  const composeEnhancers = composeWithDevTools({});
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = applyMiddleware(sagaMiddleware, logger);
  const store = createStore(rootReducer, composeEnhancers(middlewares));

  sagas.forEach(sagaMiddleware.run);

  return store;
};
