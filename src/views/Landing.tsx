import React, { FC, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Theme } from 'theme';
import { ScrollArrow, AnimatedText } from '../components';

export const Landing: FC = () => {
  const classes = useStyles();

  const [state, setState] = useState(0);

  const renderIntro = () => (
    <div className={classes.intro}>
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
      <AnimatedText shouldPlayed={state === 2}>
        Based in Toronto, CA
      </AnimatedText>
    </div>
  );

  return (
    <article className={classes.root}>
      <div className={classes.container}>
        {renderIntro()}

        <ScrollArrow />
      </div>
    </article>
  );
};

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      height: '100%',
      padding: theme.spacing(4),
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      position: 'relative'
    },
    container: {
      width: '100%',
      maxWidth: '80vw',
      margin: '0 auto'
    },
    intro: {
      '& > div': {
        ...theme.typography.h5
      }
    }
  }),
  { name: 'landing' }
);
