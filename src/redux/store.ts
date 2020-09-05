import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';
import rootSaga from './sagas';
import rootReducers from './reducers';

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
const persistor = persistStore(store);
export { store, persistor };
