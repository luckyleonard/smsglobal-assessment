import { MessagesType } from 'types/response.type';

export type countTypes = {
  total: number;
  delivered: number;
  sent: number;
  scheduled: number;
  undelivered: number;
};

export default function countMessages(
  allMessages: MessagesType[],
  period: number
): countTypes {
  const count: countTypes = {
    total: 0,
    delivered: 0,
    sent: 0,
    scheduled: 0,
    undelivered: 0,
  };
  const filterPeriod = period * 3600 * 1000;
  const timeStampNow = new Date().getTime();

  const filteredMessages = allMessages.filter((message: MessagesType) => {
    const messageTimeStamp = new Date(message.dateTime).getTime();
    if (timeStampNow - messageTimeStamp < filterPeriod) {
      count[message.status as keyof countTypes]++;
      return true;
    }
    return false;
  });

  count.total = filteredMessages.length;

  return count;
}
