import {
  PRE_SEND_MESSAGE,
  SEND_MESSAGE_SUCCEEDED,
  SEND_MESSAGE_FAILED,
  GET_MESSAGE_SUCCEEDED,
  GET_MESSAGE_FAILED,
} from 'redux/actions/message';
import messageReducer from './../message';
import { ResponseMessageType } from 'types/response.type';

describe('message reducer', () => {
  it('should update hasSent state with PRE_SEND_MESSAGE', () => {
    const action = {
      type: PRE_SEND_MESSAGE,
      payload: { hasSent: false },
    };
    const initialState = {
      hasSent: true,
      error: null,
      messageSummary: {} as ResponseMessageType,
    };

    expect(messageReducer(initialState, action)).toEqual({
      hasSent: false,
      error: null,
      messageSummary: {},
    });
  });

  it('should update hasSent and error state with SEND_MESSAGE_SUCCEEDED', () => {
    const action = {
      type: SEND_MESSAGE_SUCCEEDED,
      payload: { error: null, hasSent: true },
    };
    const initialState = {
      hasSent: false,
      error: 'error',
      messageSummary: {} as ResponseMessageType,
    };

    expect(messageReducer(initialState, action)).toEqual({
      hasSent: true,
      error: null,
      messageSummary: {},
    });
  });

  it('should update error state with SEND_MESSAGE_FAILED', () => {
    const action = {
      type: SEND_MESSAGE_FAILED,
      payload: { error: 'some err' },
    };
    const initialState = {
      hasSent: false,
      error: null,
      messageSummary: {} as ResponseMessageType,
    };

    expect(messageReducer(initialState, action)).toEqual({
      hasSent: false,
      error: 'some err',
      messageSummary: {},
    });
  });

  it('should update response and error state with GET_MESSAGE_SUCCEEDED', () => {
    const action = {
      type: GET_MESSAGE_SUCCEEDED,
      payload: {
        response: { fake: 'some response' },
        error: null,
      },
    };

    const initialState = {
      hasSent: false,
      error: 'some err',
      messageSummary: {} as ResponseMessageType,
    };

    expect(messageReducer(initialState, action)).toEqual({
      hasSent: false,
      error: null,
      messageSummary: { fake: 'some response' },
    });
  });

  it('should update error state with GET_MESSAGE_FAILED', () => {
    const action = {
      type: GET_MESSAGE_FAILED,
      payload: {
        error: 'some errr',
      },
    };
    const initialState = {
      hasSent: false,
      error: null,
      messageSummary: {} as ResponseMessageType,
    };

    expect(messageReducer(initialState, action)).toEqual({
      hasSent: false,
      error: 'some errr',
      messageSummary: {},
    });
  });
});
