import { combineReducers } from 'redux';
import settingReducer from './setting';

const rootReducers = combineReducers({
  setting: settingReducer,
});

export default rootReducers;
export type RootState = ReturnType<typeof rootReducers>;
