import axios from 'axios';
import { MessageType } from 'pages/types/Message.type';
import { getAuthorizationHeader } from './auth';

export const sendMessageApi = async (
  payload: MessageType,
  apiKey: string,
  apiSecret: string
) => {
  const host = 'api.smsglobal.com';
  const uri = '/v2/sms/';
  const method = 'POST';
  const authorizationHeader = getAuthorizationHeader(
    host,
    uri,
    method,
    apiKey,
    apiSecret
  );
  const [error, response] = await axios({
    url: `https://${host}${uri}`,
    method,
    data: payload,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: authorizationHeader,
    },
  })
    .then((response) => [null, response.data])
    .catch((error) => [error, null]);
  return [error, response];
};
