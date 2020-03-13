import React, { FC, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Theme } from 'theme';
import { ScrollArrow, AnimatedText, Card } from '../components';

export const Landing: FC = () => {
  const classes = useStyles();

  const [state, setState] = useState(0);

  const renderIntro = () => {
    return (
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
  };

  return (
    <div className={classes.root}>
      <article className={classes.container}>
        <div>
          {renderIntro()}

          <ScrollArrow />
        </div>
      </article>

      <article className={classes.grid}>
        <Card title="Crumbs" subtitle="HTML / CSS / JS"></Card>
        <Card title="Dogify" subtitle="Angular2 / Python / Flask"></Card>
        <Card title="Leahlou" subtitle="React / Redux"></Card>
        <Card title="Dollar" subtitle="React / Redux"></Card>
      </article>
    </div>
  );
};

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      padding: theme.spacing(4)
    },
    container: {
      width: '100%',
      minHeight: '100vh',
      maxWidth: '80vw',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      position: 'relative'
    },
    grid: {
      display: 'flex',
      flexDirection: 'column',
      '& div:nth-child(even)': {
        alignSelf: 'flex-end'
      }
    },
    intro: {
      '& > div': {
        ...theme.typography.h5
      }
    }
  }),
  { name: 'landing' }
);
