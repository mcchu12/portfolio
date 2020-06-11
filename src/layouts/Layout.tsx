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
        <main>
          {children}
          <Footer />
        </main>
      </div>
      <Background />
    </div>
  );
};

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      backgroundColor: theme.palette.background,
      overflow: 'hidden',
    },
    wrapper: {
      position: 'relative',
      zIndex: 2,
      color: theme.palette.common.white,

      '& > main': {
        margin: '0 auto',
        padding: theme.spacing(12, 4, 0),
        position: 'relative',
      },

      [theme.breakpoints.up('sm')]: {
        '& > main': {
          maxWidth: '80vw',
          padding: theme.spacing(12, 0, 0),
        },
      },
    },
  }),
  { name: 'layout' }
);
