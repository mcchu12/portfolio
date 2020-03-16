import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Layout } from './layouts';
import { Landing as LandingView } from './views';

export const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={LandingView} />
      </Switch>
    </Layout>
  );
};
