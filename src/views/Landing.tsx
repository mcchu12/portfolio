import React, { FC, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Theme } from 'theme';
import {
  ScrollArrow,
  AnimatedText,
  Card,
  Typography,
  Button
} from '../components';

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
          <div className={classes.connect}>
            <Button>
              <Typography variant="overline">Github</Typography>
            </Button>
            <Button>
              <Typography variant="overline">Linkedin</Typography>
            </Button>
            <Button>
              <Typography variant="overline">Resume</Typography>
            </Button>
          </div>
        </div>
        <ScrollArrow />
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
      margin: '0 auto',
      padding: theme.spacing(0, 2),
      [theme.breakpoints.up('sm')]: {
        maxWidth: '80vw',
        padding: theme.spacing(0, 4)
      }
    },
    container: {
      width: '100%',
      minHeight: '100vh',

      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      position: 'relative'
    },
    grid: {
      display: 'flex',
      flexDirection: 'column',
      [theme.breakpoints.up('md')]: {
        '& div:nth-child(even)': {
          alignSelf: 'flex-end'
        }
      }
    },
    intro: {
      '& > div': {
        ...theme.typography.h5
      }
    },
    connect: {
      '& > button': {
        marginRight: theme.spacing(2)
      }
    }
  }),
  { name: 'landing' }
);
