import React, { FC, ChangeEvent, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { SettingDialog, SettingCard } from './components';
import { SettingInputTypes } from 'pages/types/Setting.type';

const Setting: FC = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [apiSetting, setApiSetting] = useState<SettingInputTypes>({
    apiKey: '',
    apiSecret: '',
    displayName: '',
  });

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
        <SettingCard />
      </Grid>
    </Paper>
  );
};

export default Setting;
