import React, { FC, useRef } from 'react';
import { Route } from 'react-router-dom';
import { RootState } from 'typesafe-actions';
import { connect } from 'react-redux';

import { Layout } from '../layouts';
import { AnimatedRouter } from './AnimatedRouter';
import ScrollBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

import {
  Landing as LandingView,
  About as AboutView,
  Project as ProjectView,
} from '../views';

const mapStateToProps = (state: RootState) => ({
  location: state.router.location,
});

type Props = ReturnType<typeof mapStateToProps>;

const _Routes: FC<Props> = () => {
  const scrollbarRef = useRef<any>(null);

  const resetScroll = () => {
    scrollbarRef.current.getScrollElement().scrollTop = 0;
  };

  return (
    <ScrollBar ref={scrollbarRef} style={{ maxHeight: '100vh' }}>
      <Layout>
        <AnimatedRouter resetScroll={resetScroll}>
          <Route exact path="/" component={LandingView} />
          <Route exact path="/about" component={AboutView} />
          <Route exact path="/projects/:id" component={ProjectView} />
        </AnimatedRouter>
      </Layout>
    </ScrollBar>
  );
};

export const Routes = connect(mapStateToProps, {})(_Routes);
