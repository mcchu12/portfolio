import React, { FC } from 'react';
import { makeStyles } from '@material-ui/styles';

import { Theme } from 'theme';
import { Typography, Button, Logo } from '../components';

export const NavBar: FC = () => {
  const classes = useStyles();

  return (
    <header className={classes.root}>
      <div className={classes.toolbar}>
        <Logo />

        <nav>
          <Button>
            <Typography variant="subtitle2">About</Typography>
          </Button>
        </nav>
      </div>
    </header>
  );
};

const useStyles = makeStyles<Theme>(
  theme => ({
    root: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      color: theme.palette.common.white
    },
    toolbar: {
      minHeight: theme.spacing(6),
      width: '100%',
      padding: theme.spacing(0, 2),
      display: 'flex',
      justifyContent: 'space-between',
      '& > div, nav': {
        alignSelf: 'center',
        padding: theme.spacing(1.5)
      },
      [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(0, 3)
      }
    }
  }),
  { name: 'navbar' }
);
