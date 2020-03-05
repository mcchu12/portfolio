import React, { FC } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Theme } from 'theme';

export const NavBar: FC = props => {
  const classes = useStyles();

  return (
    <header className={classes.root}>
      <div className={classes.toolbar}>
        <span className={classes.logo}>M.</span>
      </div>
    </header>
  );
};

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0
    },
    toolbar: {
      height: theme.spacing(6),
      width: '100%',
      padding: theme.spacing(0, 2),
      display: 'flex'
    },
    logo: {
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '1.5rem',
      fontWeight: 600
    }
  }),
  { name: 'navbar' }
);
