import React, { FC, ChangeEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { getSetting } from 'redux/selectors';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { SettingDialog, SettingCard } from './components';
import { SettingInputTypes } from 'pages/types/Setting.type';
import { Typography } from '@material-ui/core';

const Setting: FC = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [apiSetting, setApiSetting] = useState<SettingInputTypes>({
    apiKey: '',
    apiSecret: '',
    displayName: '',
  });
  const { hasSetting } = useSelector(getSetting);

  const handleApiChange = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    let name = e.target.name;
    setApiSetting((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleToggleOpen = () => {
    setOpenDialog((prevState) => !prevState);
    setApiSetting({
      apiKey: '',
      apiSecret: '',
      displayName: '',
    });
  };

  return (
    <Paper>
      <Grid
        container
        direction='column'
        alignItems='center'
        style={{ height: 500 }}>
        <SettingDialog
          openDialog={openDialog}
          apiSetting={apiSetting}
          handleToggleOpen={handleToggleOpen}
          handleApiChange={handleApiChange}
        />
        {hasSetting ? (
          <SettingCard />
        ) : (
          <Typography style={{ marginTop: 30 }}>
            Please set your API key first
          </Typography>
        )}
      </Grid>
    </Paper>
  );
};

export default Setting;
