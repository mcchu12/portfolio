import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import { Theme } from 'theme';

import { NavBar } from './NavBar';
import { Footer } from './Footer';
import { Background } from './Background';
import { fetchSocialAsync } from '../features/info/actions';

const dispatchProps = {
  fetchSocial: () => fetchSocialAsync.request(),
};

type Props = typeof dispatchProps;

const _Layout: FC<Props> = ({ children, fetchSocial }) => {
  const classes = useStyles();

  useEffect(() => {
    fetchSocial();
  }, [fetchSocial]);

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
export const Layout = connect(null, dispatchProps)(_Layout);

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
