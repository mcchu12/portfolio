import React, { FC, useEffect, useRef, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { gsap, Power0 } from 'gsap';
import { Theme } from 'theme';

import { Button, Typography, AnimatedText } from '../../components';

const connections = ['github', 'linkedin', 'resume'];

export const Intro: FC = () => {
  const classes = useStyles();
  const tweenRef = useRef<gsap.core.Tween>();

  const [state, setState] = useState(0);

  const buttonElements: HTMLButtonElement[] = [];

  useEffect(() => {
    tweenRef.current = gsap.fromTo(
      buttonElements,
      { opacity: 0, y: 10 },
      {
        duration: 0.2,
        delay: 0.2,
        opacity: 1,
        y: 0,
        ease: Power0.easeOut,
        stagger: 0.2,
        paused: true
      }
    );
  }, [buttonElements]);

  const renderIntro = () => {
    return (
      <div className={classes.greeting}>
        <AnimatedText
          shouldPlayed={state === 0}
          onTweenCompleted={() => setState(1)}
          delay={1}
        >
          Michael Chu
        </AnimatedText>
        <AnimatedText
          shouldPlayed={state === 1}
          onTweenCompleted={() => setState(2)}
        >
          Full stack web developer
        </AnimatedText>
        <AnimatedText
          shouldPlayed={state === 2}
          onTweenCompleted={() => {
            tweenRef.current?.play();
          }}
        >
          Based in Toronto, CA
        </AnimatedText>
      </div>
    );
  };

  return (
    <article className={classes.root}>
      <div>
        {renderIntro()}

        <div className={classes.socialLink}>
          {connections.map((connection, index) => (
            <Button
              key={index}
              ref={btn => btn && (buttonElements[index] = btn)}
            >
              <Typography variant="overline">{connection}</Typography>
            </Button>
          ))}
        </div>
      </div>
    </article>
  );
};

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      width: '100%',
      minHeight: '100vh',

      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      position: 'relative'
    },
    greeting: {
      '& > div': {
        ...theme.typography.h5
      }
    },
    socialLink: {
      marginTop: theme.spacing(1.5),
      '& > button': {
        marginRight: theme.spacing(3)
      }
    }
  }),
  { name: 'intro' }
);
