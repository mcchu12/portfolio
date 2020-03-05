import React, { FC } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Theme } from 'theme';

import { NavBar } from './NavBar';

export const Layout: FC = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <NavBar />
      <main className={classes.main}>{children}</main>
    </div>
  );
};

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      paddingTop: theme.spacing(6),
      height: '100%',
      backgroundColor: theme.palette.background
    },
    main: {
      height: '100%'
    }
  }),
  { name: 'layout' }
);
