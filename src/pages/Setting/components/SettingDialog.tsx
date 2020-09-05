import React, { FC, ChangeEvent, useState } from 'react';
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
import { SettingDialogTypes } from '../../types/SettingDialog.type';

export const SettingDialog: FC<SettingDialogTypes> = ({
  openDialog,
  apiSetting,
  handleToggleOpen,
  handleApiChange,
}) => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({
    keyError: '',
    secretError: '',
    nameError: '',
  });

  const validator = (setting: SettingTypes) => {
    let error = false;
    if (!setting.apiKey) {
      setErrors((prevState) => ({
        ...prevState,
        keyError: 'Please input your API key',
      }));
      error = true;
    }
    if (!setting.apiSecret) {
      setErrors((prevState) => ({
        ...prevState,
        secretError: 'Please input your API secret',
      }));
      error = true;
    }
    if (!setting.displayName) {
      setErrors((prevState) => ({
        ...prevState,
        nameError: 'Please input display name',
      }));
      error = true;
    }
    return error;
  };

  const handleSubmit = () => {
    if (validator(apiSetting)) {
      return;
    }
    setErrors({
      keyError: '',
      secretError: '',
      nameError: '',
    });
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
              label='API Key'
              fullWidth
              required
              margin='normal'
              value={apiSetting.apiKey}
              name='apiKey'
              onChange={handleApiChange}
              error={errors.keyError !== ''}
              helperText={errors.keyError}
            />
            <TextField
              label='API Secret'
              fullWidth
              required
              margin='normal'
              value={apiSetting.apiSecret}
              name='apiSecret'
              onChange={handleApiChange}
              error={errors.secretError !== ''}
              helperText={errors.secretError}
            />
            <TextField
              label='Display Name'
              fullWidth
              required
              margin='normal'
              value={apiSetting.displayName}
              name='displayName'
              onChange={handleApiChange}
              error={errors.nameError !== ''}
              helperText={errors.nameError}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit} color='primary' variant='contained'>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};
