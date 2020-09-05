import { call, put, select, takeEvery } from 'redux-saga/effects';
import { getSetting } from './../selectors/index';
import {
  sendMessageFail,
  sendMessageSuccess,
  getMessageFailure,
  getMessageSuccess,
} from './../actions/message';
import { sendMessageApi } from 'helpers/apiRequest';
import { ActionTypes } from 'types/reduxTypes';
import { MessageType } from 'pages/types/Message.type';
import { SEND_MESSAGE_REQUESTED } from 'redux/actions/message';

function* sendMessageWorker(action: ActionTypes): any {
  console.log('run me');
  const { apiKey, apiSecret } = yield select(getSetting);
  try {
    const [error] = yield call(
      sendMessageApi,
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

function* sendMessageWatcher() {
  yield takeEvery(SEND_MESSAGE_REQUESTED, sendMessageWorker);
}

export const messageSaga = [sendMessageWatcher()];
