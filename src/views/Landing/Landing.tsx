import React, { FC } from 'react';
import { makeStyles } from '@material-ui/styles';

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
  () => ({
    root: {},
  }),
  { name: 'landing' }
);
