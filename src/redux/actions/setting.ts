import { SettingTypes } from 'types/reduxTypes';

//action types
export const SET_API_KEYS = 'SET_API_KEY';

//action creators
export function setApiKeyAction(setting: SettingTypes) {
  return { type: SET_API_KEYS, payload: { setting } };
}
