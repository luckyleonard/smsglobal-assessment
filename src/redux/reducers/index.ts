import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import settingReducer from './setting';
import messageReducer from './message';

const authPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['setting'],
};

const rootReducers = persistCombineReducers(authPersistConfig, {
  setting: settingReducer,
  message: messageReducer,
});

export default rootReducers;
export type RootState = ReturnType<typeof rootReducers>;
