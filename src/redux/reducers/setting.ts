import { SettingTypes, ActionTypes } from 'types/reduxTypes';
import { SET_API_KEYS } from 'redux/actions/setting';

const initialState: SettingTypes = {
  apiKey: '',
  apiSecret: '',
  displayName: '',
};

export default function settingReducer(
  state = initialState,
  action: ActionTypes
): SettingTypes {
  switch (action.type) {
    case SET_API_KEYS:
      return {
        ...state,
        ...action.payload.setting,
      };
    default:
      return state;
  }
}
