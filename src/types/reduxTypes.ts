export type ActionTypes = {
  type: string;
  payload: {
    [key: string]: any;
  };
};

export type SettingTypes = {
  apiKey: string;
  apiSecret: string;
  displayName: string;
};
