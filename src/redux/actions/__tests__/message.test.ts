import {
  sendMessage,
  preSendMessage,
  sendMessageSuccess,
  sendMessageFail,
  getMessage,
  getMessageSuccess,
  getMessageFailure,
  SEND_MESSAGE_REQUESTED,
  PRE_SEND_MESSAGE,
  SEND_MESSAGE_SUCCEEDED,
  SEND_MESSAGE_FAILED,
  GET_MESSAGE_REQUESTED,
  GET_MESSAGE_SUCCEEDED,
  GET_MESSAGE_FAILED,
} from 'redux/actions/message';

describe('message action', () => {
  it('should return SEND_MESSAGE_REQUESTED', () => {
    const messageBody = {
      origin: 'test',
      destination: '0444444444',
      message: 'test',
    };
    expect(sendMessage(messageBody)).toEqual({
      type: SEND_MESSAGE_REQUESTED,
      payload: messageBody,
    });
  });

  it('should return PRE_SEND_MESSAGE', () => {
    expect(preSendMessage()).toEqual({
      type: PRE_SEND_MESSAGE,
      payload: { hasSent: false },
    });
  });

  it('should return SEND_MESSAGE_SUCCEEDED', () => {
    expect(sendMessageSuccess()).toEqual({
      type: SEND_MESSAGE_SUCCEEDED,
      payload: { error: null, hasSent: true },
    });
  });

  it('should return SEND_MESSAGE_FAILED ', () => {
    const error = new Error();
    expect(sendMessageFail(error)).toEqual({
      type: SEND_MESSAGE_FAILED,
      payload: { error },
    });
  });

  it('should return GET_MESSAGE_REQUESTED', () => {
    expect(getMessage()).toEqual({
      type: GET_MESSAGE_REQUESTED,
      payload: {},
    });
  });

  it('should return GET_MESSAGE_SUCCEEDED', () => {
    const response = {
      total: 14,
      offset: 1,
      limit: 20,
      messages: [
        {
          id: 6498713740135395,
          outgoing_id: 5316627183,
          origin: 'test',
          destination: '61449234321',
          message: 'test message',
          status: 'delivered',
          dateTime: '2020-09-06 22:05:27 +1000',
        },
      ],
    };
    expect(getMessageSuccess(response)).toEqual({
      type: GET_MESSAGE_SUCCEEDED,
      payload: {
        response,
        error: null,
      },
    });
  });

  it('should return GET_MESSAGE_FAILED', () => {
    const error = new Error();
    expect(getMessageFailure(error)).toEqual({
      type: GET_MESSAGE_FAILED,
      payload: {
        error,
      },
    });
  });
});
