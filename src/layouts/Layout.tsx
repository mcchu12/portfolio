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
      background: theme.palette.common.black
    },
    wrapper: {
      margin: '0 auto',
      padding: theme.spacing(0, 3),
      color: theme.palette.common.white,
      position: 'relative',
      zIndex: 1,

      [theme.breakpoints.up('sm')]: {
        maxWidth: '80vw',
        padding: theme.spacing(0, 4)
      }
    }
  }),
  { name: 'layout' }
);
