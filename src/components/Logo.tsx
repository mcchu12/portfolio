import React, { FC } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Theme } from 'theme';

export const Logo: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img src="/images/logo.png" alt="logo" />
    </div>
  );
};

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      '& img': {
        width: '100%',
        maxWidth: theme.spacing(4),
        maxHeight: theme.spacing(4)
      }
    }
  }),
  { name: 'logo' }
);
