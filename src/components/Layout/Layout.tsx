import React, { FC } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import SettingsIcon from '@material-ui/icons/Settings';

import LinkItem from './components/LinkItem';

const drawerWidth = 200;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerContainer: {
      overflow: 'auto',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(2),
    },
  })
);

const Layout: FC = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='fixed' className={classes.appBar}>
        <Toolbar>
          <Typography variant='h5' noWrap>
            SMSGlobal Message
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant='permanent'
        classes={{
          paper: classes.drawerPaper,
        }}>
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <LinkItem to='/setting' primary='Setting' icon={<SettingsIcon />} />
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        {children}
      </main>
    </div>
  );
};

export default Layout;
