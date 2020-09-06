import { setApiKeyAction, SET_API_KEYS } from 'redux/actions/setting';

describe('setting action', () => {
  it('should return SET_API_KEYS', () => {
    const payload = {
      setting: {
        apiKey: 'testkey',
        apiSecret: 'testSecret',
        displayName: 'testName',
        hasSetting: true,
      },
    };
    expect(setApiKeyAction(payload.setting)).toEqual({
      type: SET_API_KEYS,
      payload,
    });
  });
});
