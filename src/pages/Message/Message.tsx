import React, { FC, useState, ChangeEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

import { MessageBodyType } from 'pages/types/Message.type';
import { sendMessage } from 'redux/actions/message';
import { getSetting, getMessageError, isMessageSent } from 'redux/selectors';
import { LinkToSetting } from 'components/LinkToSetting';

const useStyles = makeStyles({
  card: {
    width: 500,
    padding: 30,
  },
});

const Message: FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { hasSetting } = useSelector(getSetting);
  const error = useSelector(getMessageError);
  const hasSent = useSelector(isMessageSent);

  const [messageBody, setMessageBody] = useState<MessageBodyType>({
    origin: '',
    destination: '',
    message: '',
  });
  const [openAlert, setOpenAlert] = useState(true);
  const [formTouched, setFormTouched] = useState(false);

  const handleClose = () => {
    setOpenAlert(false);
  };

  const handleMessageChange = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    let name = e.target.name;
    setMessageBody((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = () => {
    setFormTouched(true);
    if (messageBody.destination === '') {
      return;
    }
    if (error) {
      setOpenAlert(true);
    }
    dispatch(sendMessage(messageBody));
  };

  useEffect(() => {
    if (hasSent) {
      setOpenAlert(true);
    }
  }, [hasSent]);

  const count = messageBody.message.length;
  const messageReminder =
    count <= 160
      ? `${160 - count} chars left for one message`
      : `Message will be send in ${Math.ceil(count / 160)} parts`;

  return (
    <Paper>
      <Grid
        container
        alignItems='center'
        justify='center'
        style={{ height: 500 }}>
        {hasSetting ? (
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
        ) : (
          <LinkToSetting />
        )}
        {error && formTouched ? (
          <Snackbar
            open={openAlert}
            autoHideDuration={3000}
            onClose={handleClose}>
            <Alert severity='error'>This is some error happened!</Alert>
          </Snackbar>
        ) : null}
        {hasSent && formTouched ? (
          <Snackbar
            open={openAlert}
            autoHideDuration={3000}
            onClose={handleClose}>
            <Alert severity='success'>Message send success!</Alert>
          </Snackbar>
        ) : null}
      </Grid>
    </Paper>
  );
};

export default Message;
