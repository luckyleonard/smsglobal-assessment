import { ActionTypes } from 'types/reduxTypes';
import {
  SEND_MESSAGE_SUCCEEDED,
  SEND_MESSAGE_FAILED,
} from './../actions/message';

const initialState = {
  isSent: false,
  error: null,
  messages: {},
};

export default function messageReducer(
  state = initialState,
  action: ActionTypes
) {
  switch (action.type) {
    case SEND_MESSAGE_SUCCEEDED:
      return {
        ...state,
        error: action.payload.error,
        isSent: action.payload.isSent,
      };
    case SEND_MESSAGE_FAILED:
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
}
