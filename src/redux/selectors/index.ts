import { RootState } from 'redux/reducers';

export const getSetting = (state: RootState) => state.setting;

export const getMessageError = (state: RootState) => state.message.error;

export const isMessageSent = (state: RootState) => state.message.hasSent;

export const getResponseMessages = (state: RootState) =>
  state.message.messageSummary.messages;
