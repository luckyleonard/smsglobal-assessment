import React, { FC, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { SettingTypes } from 'types/reduxTypes';
import { setApiKeyAction } from 'redux/actions/setting';

type SettingDialogTypes = {
  openDialog: boolean;
  apiSetting: SettingTypes;
  handleToggleOpen: () => void;
  handleApiChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const SettingDialog: FC<SettingDialogTypes> = ({
  openDialog,
  handleToggleOpen,
  apiSetting,
  handleApiChange,
}) => {
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(setApiKeyAction(apiSetting));
    handleToggleOpen();
  };

  return (
    <Grid container direction='column' alignItems='center'>
      <Typography variant='h5' gutterBottom>
        REST API Keys
      </Typography>
      <Button variant='outlined' color='primary' onClick={handleToggleOpen}>
        Set Api key
      </Button>
      <Dialog open={openDialog} onClose={handleToggleOpen}>
        <DialogTitle>Set Your REST API Key</DialogTitle>
        <DialogContent>
          <DialogContentText>
            It will override your existing API key
          </DialogContentText>
          <form>
            <TextField
              label='Api Key'
              fullWidth
              required
              margin='normal'
              value={apiSetting.apiKey}
              name='apiKey'
              onChange={handleApiChange}
            />
            <TextField
              label='Api Secret'
              fullWidth
              required
              margin='normal'
              value={apiSetting.apiSecret}
              name='apiSecret'
              onChange={handleApiChange}
            />
            <TextField
              label='Display Name'
              fullWidth
              required
              margin='normal'
              value={apiSetting.displayName}
              name='displayName'
              onChange={handleApiChange}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit} color='primary'>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};
