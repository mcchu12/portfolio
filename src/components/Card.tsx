import React, { FC, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Theme } from 'theme';
import { gsap, Power2 } from 'gsap';
import { useInView } from 'react-intersection-observer';

import { Typography } from './Typography';

type Props = {
  thumbnail?: string;
  title?: string;
  subtitle?: string;
  index?: string;
  onImageLoaded?: () => void;
};

export const Card: FC<Props> = props => {
  const classes = useStyles();
  const [ref, inView, entry] = useInView({ threshold: 0.5, triggerOnce: true });
  const cardRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<gsap.core.Tween>();

  useEffect(() => {
    if (!cardRef.current) return;
    const cardContents = cardRef.current.children;

    if (!animRef.current)
      animRef.current = gsap.from(cardContents, {
        opacity: 0,
        y: 50,
        ease: Power2.easeOut,
        stagger: { amount: 0.5 },
        paused: true
      });

    if (inView && entry && entry.intersectionRatio >= 0.5) {
      animRef.current.play();
    }
  }, [inView, entry]);

  return (
    <div ref={ref} className={classes.root}>
      <div ref={cardRef}>
        <img
          className={classes.thumbnail}
          src={props.thumbnail}
          alt={props.title}
        />
        <div className={classes.title}>
          <Typography variant="h6">{props.title}</Typography>
          <Typography variant="overline">{props.subtitle}</Typography>
        </div>
      </div>

      <div className={classes.index}>{props.index}</div>
    </div>
  );
};

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      position: 'relative',
      margin: theme.spacing(6, 0),
      [theme.breakpoints.up('md')]: {
        width: '50%'
      },
      zIndex: 2
    },
    thumbnail: {
      width: '100%',
      display: 'block',
      boxShadow: theme.shadows.smooth2,
      cursor: 'pointer',
      transition: 'all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)',

      '&:hover': {
        transform: 'scale(1.05, 1.05) !important',
        boxShadow: theme.shadows.dreamy,
        transition: 'all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)'
      }
    },
    title: {
      margin: theme.spacing(3, 0)
    },
    index: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'block',
        position: 'absolute',
        top: 0,
        right: 0,
        transform: 'translate(40%, -50%)',
        opacity: 0.05,
        fontSize: '152px',
        fontWeight: 700,
        letterSpacing: '8px',
        zIndex: -1
      }
    }
  }),
  { name: 'card' }
);
