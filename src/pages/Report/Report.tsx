import React, { FC, useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMessage } from 'redux/actions/message';
import { getSetting, getMessageError } from 'redux/selectors';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

import { ReportCount, ReportHistory } from './components';
import { LinkToSetting } from 'components/LinkToSetting';

const Report: FC = () => {
  const dispatch = useDispatch();
  const { hasSetting } = useSelector(getSetting);
  const error = useSelector(getMessageError);
  const [openAlert, setOpenAlert] = useState(true);

  const handleClose = () => {
    setOpenAlert(false);
  };

  useLayoutEffect(() => {
    if (hasSetting) {
      dispatch(getMessage());
    }
    if (error) {
      setOpenAlert(true);
    }
  }, [hasSetting, dispatch, error]);

  return (
    <Paper>
      <Grid
        container
        direction='column'
        alignItems='center'
        justify='center'
        style={{ minHeight: 500 }}>
        {hasSetting ? (
          <>
            <ReportCount />
            <ReportHistory />
          </>
        ) : (
          <LinkToSetting />
        )}
        {error ? (
          <Snackbar
            open={openAlert}
            autoHideDuration={3000}
            onClose={handleClose}>
            <Alert severity='error'>This is some error happened!</Alert>
          </Snackbar>
        ) : null}
      </Grid>
    </Paper>
  );
};

export default Report;
