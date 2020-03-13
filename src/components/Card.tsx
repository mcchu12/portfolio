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
      width: '50%',
      padding: theme.spacing(3),
      margin: theme.spacing(5),

      zIndex: 2
    },
    media: {
      width: '100%',
      height: '400px',
      backgroundColor: theme.palette.common.white,
      boxShadow: `0 1px 1px rgba(0,0,0,0.15), 
      0 2px 2px rgba(0,0,0,0.15), 
      0 4px 4px rgba(0,0,0,0.15), 
      0 8px 8px rgba(0,0,0,0.15);`,
      borderRadius: theme.border.radius
    },
    title: {
      margin: theme.spacing(3, 0)
    }
  }),
  { name: 'card' }
);
