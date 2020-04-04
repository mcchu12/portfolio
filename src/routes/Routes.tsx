import React, { FC } from 'react';
import { Route } from 'react-router-dom';
import { RootState } from 'typesafe-actions';
import { connect } from 'react-redux';

import { Layout } from '../layouts';
import { AnimatedRouter } from './AnimatedRouter';

import { Landing as LandingView, About as AboutView } from '../views';

const mapStateToProps = (state: RootState) => ({
  location: state.router.location
});

type Props = ReturnType<typeof mapStateToProps>;

const _Routes: FC<Props> = props => {
  return (
    <Layout>
      <AnimatedRouter>
        <Route exact path="/" component={LandingView} />
        <Route exact path="/about" component={AboutView} />
      </AnimatedRouter>
    </Layout>
  );
};

export const Routes = connect(mapStateToProps, {})(_Routes);
