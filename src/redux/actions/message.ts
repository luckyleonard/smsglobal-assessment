import { MessageType } from 'pages/types/Message.type';

//action types
export const SEND_MESSAGE_REQUESTED = 'SEND_MESSAGE_REQUESTED';
export const SEND_MESSAGE_FAILED = 'SEND_MESSAGE_FAILED';
export const SEND_MESSAGE_SUCCEEDED = 'SEND_MESSAGE_SUCCEEDED';
export const GET_MESSAGE_REQUESTED = 'GET_MESSAGE_REQUESTED';
export const GET_MESSAGE_SUCCEEDED = 'GET_MESSAGE_SUCCEEDED';
export const GET_MESSAGE_FAILED = 'GET_MESSAGE_FAILED';

//action creators
export const sendMessage = (messageBody: MessageType) => ({
  type: SEND_MESSAGE_REQUESTED,
  payload: {
    origin: messageBody.origin,
    destination: messageBody.destination,
    message: messageBody.message,
  },
});

export const sendMessageSuccess = () => ({
  type: SEND_MESSAGE_SUCCEEDED,
  payload: { error: null, isSent: true },
});

export const sendMessageFail = (error: Error) => ({
  type: SEND_MESSAGE_FAILED,
  payload: { error },
});

export const getMessage = () => ({
  type: GET_MESSAGE_REQUESTED,
  payload: {},
});

export const getMessageSuccess = (response: any) => ({
  type: GET_MESSAGE_SUCCEEDED,
  payload: {
    response,
  },
});

export const getMessageFailure = (error: Error) => ({
  type: GET_MESSAGE_FAILED,
  payload: {
    error,
  },
});
