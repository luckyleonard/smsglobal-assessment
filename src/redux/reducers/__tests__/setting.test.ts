import { SET_API_KEYS } from 'redux/actions/setting';
import settingReducer from './../setting';

describe('setting reducer', () => {
  it('should update setting state', () => {
    const action = {
      type: SET_API_KEYS,
      payload: {
        setting: {
          apiKey: 'testkey',
          apiSecret: 'testSecret',
          displayName: 'testName',
          hasSetting: true,
        },
      },
    };
    const initialState = {
      apiKey: '',
      apiSecret: '',
      displayName: '',
      hasSetting: false,
    };
    expect(settingReducer(initialState, action)).toEqual({
      apiKey: 'testkey',
      apiSecret: 'testSecret',
      displayName: 'testName',
      hasSetting: true,
    });
  });
});
