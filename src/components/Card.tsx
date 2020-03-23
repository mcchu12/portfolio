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
      <div>
        <img
          className={classes.thumbnail}
          src={props.thumbnail}
          alt={props.title}
        />
        <div className={classes.title}>
          <Typography variant="h6">{props.title}</Typography>
          <Typography variant="overline">{props.subtitle}</Typography>
        </div>
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
      },
      zIndex: 2
    },
    thumbnail: {
      width: '100%',
      display: 'block',
      boxShadow: theme.shadows.smooth2,
      borderRadius: theme.border.radius,
      cursor: 'pointer',
      transition: 'all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)',

      '&:hover': {
        transform: 'scale(1.05, 1.05)',
        boxShadow: theme.shadows.dreamy,
        transition: 'all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)'
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
