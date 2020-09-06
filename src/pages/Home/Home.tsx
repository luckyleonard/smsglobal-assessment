import React, { FC } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { LinkToSetting } from 'components/LinkToSetting';

const Home: FC = () => {
  return (
    <Paper>
      <Grid
        container
        direction='column'
        alignItems='center'
        justify='center'
        style={{ minHeight: 500 }}>
        <Typography variant='h6'>Welcome to SMSGlobal!</Typography>
        <LinkToSetting />
      </Grid>
    </Paper>
  );
};

export default Home;
