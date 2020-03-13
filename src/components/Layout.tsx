import React, { FC, useRef, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Theme } from 'theme';

import { NavBar } from './NavBar';
import { Background } from './Background';
import { LerpContainer } from './LerpContainer';

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

      <LerpContainer>
        <main>{children}</main>
        <Background />
      </LerpContainer>
    </div>
  );
};

const useStyles = makeStyles<Theme, { paddingTop: number }>(
  theme => ({
    root: {
      paddingTop: props => props.paddingTop,
      backgroundColor: theme.palette.background
      // position: 'relative'
    }
  }),
  { name: 'layout' }
);
