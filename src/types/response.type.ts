export type MessagesType = {
  id: number;
  outgoing_id: number;
  origin: string;
  destination: string;
  message: string;
  status: string;
  dateTime: string;
};

export type ResponseMessageType = {
  total: number;
  offset: number;
  limit: number;
  messages: MessagesType[];
};
