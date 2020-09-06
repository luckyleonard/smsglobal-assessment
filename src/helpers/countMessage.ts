import { MessagesType } from 'types/response.type';

export type countTypes = {
  [key: string]: number;
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

  const filteredMessages = allMessages.filter((message) => {
    const messageTimeStamp = new Date(message.dateTime).getTime();
    if (timeStampNow - messageTimeStamp < filterPeriod) {
      count[message.status]++;
      return true;
    }
    return false;
  });

  count.total = filteredMessages.length;

  return count;
}
