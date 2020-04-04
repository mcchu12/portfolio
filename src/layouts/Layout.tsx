import React, { FC } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Theme } from 'theme';

import { NavBar } from './NavBar';
import { Footer } from './Footer';
import { Background } from './Background';

export const Layout: FC = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <NavBar />
      <div className={classes.wrapper}>
        <main>{children}</main>

        <Footer />
      </div>
      <Background />
    </div>
  );
};

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      backgroundColor: theme.palette.background
    },
    wrapper: {
      margin: '0 auto',
      padding: theme.spacing(0, 3),
      position: 'relative',
      zIndex: 2,
      color: theme.palette.common.white,

      [theme.breakpoints.up('sm')]: {
        maxWidth: '80vw',
        padding: theme.spacing(0, 4)
      }
    }
  }),
  { name: 'layout' }
);
