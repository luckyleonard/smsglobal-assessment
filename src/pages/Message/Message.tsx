import React, { FC, useState, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';

import { MessageType } from 'pages/types/Message.type';
import { sendMessage } from 'redux/actions/message';

const useStyles = makeStyles({
  card: {
    width: 600,
    padding: 30,
    margin: '0 auto',
  },
});

const Message: FC = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [messageBody, setMessageBody] = useState<MessageType>({
    origin: '',
    destination: '',
    message: '',
  });
  const handleMessageChange = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    let name = e.target.name;
    setMessageBody((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = () => {
    dispatch(sendMessage(messageBody));
  };
  const count = messageBody.message.length;
  const messageReminder =
    count <= 160
      ? `${160 - count} chars left for one message`
      : `Message will be send in ${Math.ceil(count / 160)} parts`;

  return (
    <Paper>
      <Card className={classes.card}>
        <form>
          <TextField
            label='From'
            fullWidth
            margin='normal'
            value={messageBody.origin}
            name='origin'
            onChange={handleMessageChange}
            helperText='(Optional)'
          />
          <TextField
            label='To'
            fullWidth
            required
            type='number'
            margin='normal'
            value={messageBody.destination}
            name='destination'
            onChange={handleMessageChange}
            helperText='Please input valid number'
          />
          <TextField
            label='Message'
            fullWidth
            required
            multiline
            rows={5}
            margin='normal'
            value={messageBody.message}
            name='message'
            onChange={handleMessageChange}
            helperText={messageReminder}
          />
        </form>
        <Button onClick={handleSubmit} color='primary' variant='contained'>
          Send
        </Button>
      </Card>
    </Paper>
  );
};

export default Message;
