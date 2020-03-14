import React, { FC } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Theme } from 'theme';

import { Typography } from './Typography';

type Props = {
  thumbnail?: string;
  title?: string;
  subtitle?: string;
};

export const Card: FC<Props> = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.media}></div>
      <div className={classes.title}>
        <Typography variant="h6">{props.title}</Typography>
        <Typography variant="overline">{props.subtitle}</Typography>
      </div>
    </div>
  );
};

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      width: '100%',
      padding: theme.spacing(3),
      margin: theme.spacing(5),
      [theme.breakpoints.up('md')]: {
        width: '50%'
      }
    },
    media: {
      width: '100%',
      height: '400px',
      backgroundColor: theme.palette.common.white,
      boxShadow: theme.shadows.smooth5,
      borderRadius: theme.border.radius,
      transition: 'box-shadow .2s cubic-bezier(0.645, 0.045, 0.355, 1)',
      cursor: 'pointer',
      '&:hover': {
        transition: 'box-shadow .5s cubic-bezier(0.645, 0.045, 0.355, 1)',
        boxShadow: theme.shadows.smooth4
      }
    },
    title: {
      margin: theme.spacing(3, 0)
    }
  }),
  { name: 'card' }
);
