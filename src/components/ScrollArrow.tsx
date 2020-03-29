import React, { FC, useRef, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { gsap, Power1 } from 'gsap';
import { Theme } from 'theme';

import { Typography } from './Typography';

type Props = {
  shouldPlayed?: boolean;
};

export const ScrollArrow: FC<Props> = ({ shouldPlayed = false }) => {
  const classes = useStyles();

  const shaftRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const tl = useRef<gsap.core.Timeline>();

  useEffect(() => {
    if (!shaftRef.current) return;
    const arrowHeads = shaftRef.current.children;

    if (!tl.current) {
      tl.current = gsap.timeline({ paused: true });

      tl.current
        .from(textRef.current, {
          y: '-100%',
          duration: 0.7,
          ease: Power1.easeInOut
        })
        .from(
          shaftRef.current,
          {
            scaleY: 0,
            transformOrigin: 'top',
            duration: 0.7,
            ease: Power1.easeInOut
          },
          'arrowHeads'
        )
        .from(
          arrowHeads,
          {
            rotate: '0deg',
            duration: 0.7,
            ease: Power1.easeInOut
          },
          'arrowHeads'
        );
    }

    if (shouldPlayed) tl.current.play();
  }, [shouldPlayed]);

  return (
    <div aria-hidden className={classes.root}>
      <div className={classes.text}>
        <Typography ref={textRef} variant="overline">
          Scroll
        </Typography>
      </div>

      <div ref={shaftRef} className={classes.arrow}>
        <span />
        <span />
      </div>
    </div>
  );
};

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      maxWidth: theme.spacing(3),

      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',

      position: 'absolute',
      bottom: theme.spacing(8),
      right: -theme.spacing(8),

      [theme.breakpoints.down('sm')]: {
        display: 'none'
      }
    },
    text: {
      marginBottom: theme.spacing(1),
      writingMode: 'vertical-lr',
      overflow: 'hidden',

      '& span': {
        display: 'block'
      }
    },
    arrow: {
      backgroundColor: theme.palette.common.white,
      width: '1px',
      height: '40px',
      position: 'relative',

      '& span': {
        backgroundColor: theme.palette.common.white,
        content: '""',
        display: 'block',
        height: '6px',
        width: '1px',
        position: 'absolute',
        bottom: 0,
        right: 0
      },

      '& span:first-child': {
        transformOrigin: 'bottom left',
        transform: 'rotate(45deg)'
      },

      '& span:last-child': {
        transformOrigin: 'bottom right',
        transform: 'rotate(-45deg)'
      }
    }
  }),
  { name: 'scroll' }
);
