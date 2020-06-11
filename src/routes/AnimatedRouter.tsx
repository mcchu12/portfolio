import React, { FC } from 'react';
import { Switch, useLocation } from 'react-router-dom';
import { Transition, SwitchTransition } from 'react-transition-group';
import { gsap, Power1 } from 'gsap';

type Props = {
  resetScroll: () => void;
};

export const AnimatedRouter: FC<Props> = ({ children, resetScroll }) => {
  const location = useLocation();
  const handleOnEnter = (node: HTMLElement) => {
    gsap.from(node, {
      y: 50,
      autoAlpha: 0,
      duration: 0.5,
      ease: Power1.easeInOut,
      onComplete: (node) => {
        gsap.set(node, { clearProps: 'all' });
      },
      onCompleteParams: [node],
    });
  };

  const handleOnExisting = (node: HTMLElement) => {
    gsap.to(node, {
      y: 50,
      autoAlpha: 0,
      duration: 0.5,
      ease: Power1.easeInOut,
      onComplete: () => {
        resetScroll();
      },
    });
  };

  return (
    <SwitchTransition mode="out-in">
      <Transition
        key={location.pathname}
        timeout={500}
        unmountOnExit
        mountOnEnter
        onEnter={handleOnEnter}
        onExit={handleOnExisting}
      >
        <Switch location={location}>{children}</Switch>
      </Transition>
    </SwitchTransition>
  );
};
