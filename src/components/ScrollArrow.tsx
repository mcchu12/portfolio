import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Theme } from 'theme';

import { Typography } from './Typography';

export const ScrollArrow = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.text} variant="overline">
        Scroll
      </Typography>
      <img
        className={classes.arrow}
        src="/images/down-arrow.svg"
        alt="down arrow"
      />
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    maxWidth: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'absolute',
    bottom: theme.spacing(4),
    right: theme.spacing(4)
  },
  '@keyframes down': {
    '0%': {
      transform: 'translateY(0%)'
    },
    '50%': {
      transform: 'translateY(10%)'
    },
    '100%': {
      transform: 'translateY(0%)'
    }
  },
  arrow: {
    width: '100%',
    padding: theme.spacing(0.5),

    animation: `$down 1s infinite ease-in-out`
  },
  text: {
    writingMode: 'vertical-lr'
  }
}));
