import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Layout } from '../layouts';
import { Landing as LandingView, About as AboutView } from '../views';

import { AnimatedRoute } from './AnimatedRoute';

export const Routes: FC = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={LandingView} />
        <AnimatedRoute path="/about" appear component={AboutView} />
      </Switch>
    </Layout>
  );
};
