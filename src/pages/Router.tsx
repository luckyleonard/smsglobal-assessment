import React, { FC } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from 'components/Layout';
import Setting from './Setting';

const AppRouter: FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path='/setting'>
            <Setting />
          </Route>
          <Route path='/message'>
            <div>Message</div>
          </Route>
          <Route path='/report'>
            <div>Report</div>
          </Route>
          <Route exact path='/'>
            <div>Home</div>
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
