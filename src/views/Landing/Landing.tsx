import React, { FC } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Theme } from 'theme';

import { Intro } from './Intro';
import { Projects } from './Projects';

export const Landing: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Intro />

      <Projects />
    </div>
  );
};

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      margin: '0 auto',
      padding: theme.spacing(0, 3),
      [theme.breakpoints.up('sm')]: {
        maxWidth: '80vw',
        padding: theme.spacing(0, 4)
      }
    }
  }),
  { name: 'landing' }
);
