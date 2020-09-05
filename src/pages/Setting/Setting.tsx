import React, { FC, ChangeEvent, useState } from 'react';
import Paper from '@material-ui/core/Paper';

import { SettingDialog, SettingCard } from './components';
import { SettingTypes } from 'types/reduxTypes';

const Setting: FC = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [apiSetting, setApiSetting] = useState<SettingTypes>({
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
      <SettingDialog
        openDialog={openDialog}
        apiSetting={apiSetting}
        handleToggleOpen={handleToggleOpen}
        handleApiChange={handleApiChange}
      />
      <SettingCard />
    </Paper>
  );
};

export default Setting;
