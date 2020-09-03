import React, { FC } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from 'components/Layout';

const AppRouter: FC = () => {
  return (
    <BrowserRouter>
      <Layout></Layout>
    </BrowserRouter>
  );
};

export default AppRouter;
