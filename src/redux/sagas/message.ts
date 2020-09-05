import { call, put, select, takeEvery } from 'redux-saga/effects';
import { getSetting } from './../selectors/index';
import {
  sendMessageFail,
  sendMessageSuccess,
  preSendMessage,
  getMessageFailure,
  getMessageSuccess,
} from './../actions/message';
import { sendMessageRequest, getMessagesRequest } from 'helpers/apiRequest';
import { ActionTypes } from 'types/reduxTypes';
import { MessageType } from 'pages/types/Message.type';
import {
  SEND_MESSAGE_REQUESTED,
  GET_MESSAGE_REQUESTED,
} from 'redux/actions/message';

function* sendMessageWorker(action: ActionTypes): any {
  const { apiKey, apiSecret } = yield select(getSetting);
  try {
    yield put(preSendMessage());
    const [error] = yield call(
      sendMessageRequest,
      action.payload as MessageType,
      apiKey,
      apiSecret
    );
    if (error) {
      return yield put(sendMessageFail(error.response.data));
    }
    yield put(sendMessageSuccess());
  } catch (e) {
    yield put(sendMessageFail(e));
  }
}

function* getMessagesWorker(action: ActionTypes): any {
  const { apiKey, apiSecret } = yield select(getSetting);
  try {
    yield put(preSendMessage());
    const [error, response] = yield call(getMessagesRequest, apiKey, apiSecret);
    if (error) {
      return yield put(getMessageFailure(error.response.data));
    }
    yield put(getMessageSuccess(response));
  } catch (e) {
    yield put(getMessageFailure(e));
  }
}

function* sendMessageWatcher() {
  yield takeEvery(SEND_MESSAGE_REQUESTED, sendMessageWorker);
}

function* getMessagesWatcher() {
  yield takeEvery(GET_MESSAGE_REQUESTED, getMessagesWorker);
}

export const messageSaga = [sendMessageWatcher(), getMessagesWatcher()];
