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
          />
          <TextField
            label='To'
            fullWidth
            required
            margin='normal'
            value={messageBody.destination}
            name='destination'
            onChange={handleMessageChange}
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
