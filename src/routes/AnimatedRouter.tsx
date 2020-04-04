import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Transition, TransitionGroup } from 'react-transition-group';
import { gsap, Power1 } from 'gsap';

export const AnimatedRouter: FC = ({ children }) => {
  const handleOnEnter = (node: HTMLElement) => {
    gsap.set(node, {
      position: 'fixed',
      y: 100,
      rotation: 0.01,
      autoAlpha: 0,
      willChange: 'transform'
    });

    gsap.to(node, {
      y: 0,
      autoAlpha: 1,
      duration: 1,
      ease: Power1.easeInOut,
      force3D: true,
      onComplete: node => {
        gsap.set(node, { clearProps: 'all' });
      },
      onCompleteParams: [node]
    });
  };

  const handleOnExisting = (node: HTMLElement) => {
    gsap.set(node, {
      willChange: 'transform',
      rotation: 0.01
    });

    gsap.to(node, {
      y: 100,
      autoAlpha: 0,
      duration: 1,
      ease: Power1.easeInOut,
      force3D: true,
      onComplete: node => {
        gsap.set(node, { clearProps: 'all' });
      },
      onCompleteParams: [node]
    });
  };

  return (
    <Route path="/">
      {({ location }) => (
        <TransitionGroup>
          <Transition
            key={location.pathname}
            timeout={1000}
            unmountOnExit
            mountOnEnter
            onEnter={handleOnEnter}
            onExit={handleOnExisting}
          >
            <Switch location={location}>{children}</Switch>
          </Transition>
        </TransitionGroup>
      )}
    </Route>
  );
};
