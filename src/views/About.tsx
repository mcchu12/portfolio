import React, { FC } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Theme } from 'theme';

export const About: FC = () => {
  const classes = useStyles();

  return <div className={classes.root}>About</div>;
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minHeight: '100vh',
    color: 'white',
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    alignItems: 'center'
  }
}));
