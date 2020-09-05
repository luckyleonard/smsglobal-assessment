import { ActionTypes, MessageTypes } from 'types/reduxTypes';
import { ResponseMessageType } from 'types/response.type';

import {
  SEND_MESSAGE_SUCCEEDED,
  SEND_MESSAGE_FAILED,
  PRE_SEND_MESSAGE,
  GET_MESSAGE_FAILED,
  GET_MESSAGE_SUCCEEDED,
} from './../actions/message';

const initialState: MessageTypes = {
  hasSent: false,
  error: null,
  messageSummary: {} as ResponseMessageType,
};

export default function messageReducer(
  state = initialState,
  action: ActionTypes
): MessageTypes {
  switch (action.type) {
    case PRE_SEND_MESSAGE:
      return {
        ...state,
        hasSent: action.payload.hasSent,
      };
    case SEND_MESSAGE_SUCCEEDED:
      return {
        ...state,
        error: action.payload.error,
        hasSent: action.payload.hasSent,
      };
    case SEND_MESSAGE_FAILED:
      return {
        ...state,
        error: action.payload.error,
      };
    case GET_MESSAGE_SUCCEEDED:
      return {
        ...state,
        messageSummary: action.payload.response,
        hasSent: action.payload.hasSent,
        error: action.payload.error,
      };
    case GET_MESSAGE_FAILED:
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
}
