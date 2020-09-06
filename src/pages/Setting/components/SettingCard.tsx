import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import { getSetting } from 'redux/selectors/index';

export const SettingCard: FC = () => {
  const setting = useSelector(getSetting);
  return (
    <Card style={{ width: 500, marginTop: 80 }}>
      <CardContent>
        <Typography variant='h5'>Saved API settings</Typography>
        <Divider />
        <Typography variant='h6'>{setting.displayName}</Typography>
        <Typography variant='body1'>API key: {setting.apiKey}</Typography>
        <Typography variant='body1'>API secret: {setting.apiSecret}</Typography>
      </CardContent>
    </Card>
  );
};
