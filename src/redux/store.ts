import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import rootReducers from './reducers/index';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [applyMiddleware(sagaMiddleware)];

if (
  process.env.NODE_ENV !== 'production' &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION__
) {
  middlewares.push((window as any).__REDUX_DEVTOOLS_EXTENSION__());
}

const store = createStore(rootReducers, compose(...middlewares));
sagaMiddleware.run(rootSaga);

export default store;
