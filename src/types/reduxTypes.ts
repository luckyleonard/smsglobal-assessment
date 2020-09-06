import { ResponseMessageType } from './response.type';
export type ActionTypes = {
  type: string;
  [key: string]: any;
};

export type SettingTypes = {
  apiKey: string;
  apiSecret: string;
  displayName: string;
  hasSetting: boolean;
};

export type MessageTypes = {
  hasSent: boolean;
  error: string | null;
  messageSummary: ResponseMessageType;
};
