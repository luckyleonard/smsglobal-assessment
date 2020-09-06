import React, { FC } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from 'components/Layout';
import Setting from './Setting';
import Message from './Message';
import Report from './Report';
import Home from './Home';

const AppRouter: FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path='/setting'>
            <Setting />
          </Route>
          <Route path='/message'>
            <Message />
          </Route>
          <Route path='/report'>
            <Report />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/'>
            <div>Not found</div>
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRouter;
