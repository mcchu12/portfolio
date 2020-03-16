import React, { FC } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Theme } from 'theme';

import { Typography } from './Typography';

type Props = {
  thumbnail?: string;
  title?: string;
  subtitle?: string;
  index?: string;
  onImageLoaded?: () => void;
};

export const Card: FC<Props> = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img
        className={classes.media}
        src={props.thumbnail}
        alt={props.title}
        onLoad={props.onImageLoaded}
      ></img>
      <div className={classes.title}>
        <Typography variant="h6">{props.title}</Typography>
        <Typography variant="overline">{props.subtitle}</Typography>
      </div>
      <div className={classes.index}>{props.index}</div>
    </div>
  );
};

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      position: 'relative',
      margin: theme.spacing(6, 0),
      [theme.breakpoints.up('md')]: {
        width: '50%'
      }
    },
    media: {
      backgroundColor: theme.palette.common.white,
      boxShadow: theme.shadows.smooth5,
      borderRadius: theme.border.radius,
      transition: 'box-shadow .2s cubic-bezier(0.645, 0.045, 0.355, 1)',
      cursor: 'pointer',

      width: '100%',

      '&:hover': {
        transition: 'box-shadow .3s cubic-bezier(0.645, 0.045, 0.355, 1)',
        boxShadow: theme.shadows.smooth4
      }
    },
    title: {
      margin: theme.spacing(3, 0)
    },
    index: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'block',
        position: 'absolute',
        top: 0,
        right: 0,
        transform: 'translate(40%, -50%)',
        opacity: 0.05,
        fontSize: '152px',
        fontWeight: 700,
        letterSpacing: '8px',
        zIndex: -1
      }
    }
  }),
  { name: 'card' }
);
