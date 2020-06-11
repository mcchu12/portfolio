import React, { FC } from 'react';
import { makeStyles } from '@material-ui/styles';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { RootState } from 'typesafe-actions';

import { Theme } from 'theme';
import { Typography, Button, Logo } from '../components';

const mapStateToProps = (state: RootState) => ({
  path: state.router.location.pathname,
});

const dispatchProps = {
  routeToHome: () => push('/'),
  routeToAbout: () => push('/about'),
};

type Props = ReturnType<typeof mapStateToProps> & typeof dispatchProps;

const _NavBar: FC<Props> = ({ routeToAbout, routeToHome, path }) => {
  const classes = useStyles();

  return (
    <header className={classes.root}>
      <div className={classes.toolbar}>
        <Logo onClick={routeToHome} />

        <nav>
          <Button onClick={routeToAbout} active={path === '/about'}>
            <Typography variant="subtitle2">About</Typography>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export const NavBar = connect(mapStateToProps, dispatchProps)(_NavBar);

const useStyles = makeStyles<Theme>(
  (theme) => ({
    root: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 10,
      color: theme.palette.common.white,
    },
    toolbar: {
      minHeight: theme.spacing(6),
      width: '100%',
      padding: theme.spacing(0, 2),
      display: 'flex',
      justifyContent: 'space-between',
      '& > div, nav': {
        alignSelf: 'center',
        padding: theme.spacing(1.5),
      },
      [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(0, 3),
      },
    },
  }),
  { name: 'navbar' }
);
