export type messagesType = {
  id: number;
  outgoing_id: number;
  origin: string;
  destination: string;
  message: string;
  status: string;
  dateTime: string;
};

export type reponseType = {
  total: number;
  offset: number;
  limit: number;
  messages: messagesType[];
};
