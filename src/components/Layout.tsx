import React, { FC, useRef, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Theme } from 'theme';

import { NavBar } from './NavBar';

export const Layout: FC = ({ children }) => {
  const [paddingTop, setPaddingTop] = useState(0);
  const classes = useStyles({ paddingTop });
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const currentHeight = navRef.current?.clientHeight;
    if (currentHeight) {
      setPaddingTop(currentHeight);
    }
  }, []);

  return (
    <div className={classes.root}>
      <NavBar ref={navRef} />
      <main className={classes.main}>{children}</main>
    </div>
  );
};

const useStyles = makeStyles<Theme, { paddingTop: number }>(
  theme => ({
    root: {
      paddingTop: props => props.paddingTop,
      height: '100%',
      backgroundColor: theme.palette.background
    },
    main: {
      height: '100%'
    }
  }),
  { name: 'layout' }
);
