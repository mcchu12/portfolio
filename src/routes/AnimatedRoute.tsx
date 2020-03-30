import React, { FC, useRef } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Route } from 'react-router-dom';
import { Transition } from 'react-transition-group';
import { gsap, Power1 } from 'gsap';
import { Theme } from 'theme';

type Props = {
  path: string;
  component: FC;
  appear?: boolean;
};

export const AnimatedRoute: FC<Props> = ({
  path,
  component: Component,
  appear
}) => {
  const classes = useStyles();
  const overRef = useRef<HTMLDivElement>(null);

  const handleOnEnter = () => {
    console.log(overRef.current);
    if (!overRef.current) return;
    console.log('On enter');
    gsap.to(overRef.current, {
      x: '-100%',
      duration: 2,
      ease: Power1.easeInOut
    });
  };

  return (
    <Route path={path} exact>
      {({ match }) => {
        return (
          <Transition
            appear
            mountOnEnter
            in={match !== null}
            timeout={500}
            onEnter={handleOnEnter}
          >
            <>
              <div ref={overRef} className={classes.overlay} />
              <Component />
            </>
          </Transition>
        );
      }}
    </Route>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  overlay: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1001,
    transform: 'translateX(100%)',
    backgroundColor: theme.palette.common.black
  }
}));
