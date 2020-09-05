import { combineReducers } from 'redux';
import settingReducer from './setting';
import messageReducer from './message';

const rootReducers = combineReducers({
  setting: settingReducer,
  message: messageReducer,
});

export default rootReducers;
export type RootState = ReturnType<typeof rootReducers>;
