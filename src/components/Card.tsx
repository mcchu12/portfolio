import React, { FC, useEffect, useRef, memo } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Theme } from 'theme';
import { gsap, Power1 } from 'gsap';
import { useInView } from 'react-intersection-observer';

import { Typography } from './Typography';

type Props = {
  thumbnail?: string;
  title?: string;
  subtitle?: string;
  index?: string;
  onImageLoaded?: () => void;
};

const _Card: FC<Props> = props => {
  const classes = useStyles();
  const [ref, inView, entry] = useInView({ threshold: 0.5, triggerOnce: true });
  const cardRef = useRef<HTMLDivElement>(null);
  const tween = useRef<gsap.core.Tween>();

  useEffect(() => {
    if (!cardRef.current) return;

    if (!tween.current) {
      tween.current = gsap.from(cardRef.current, {
        y: 50,
        rotation: 0.01,
        autoAlpha: 0,
        ease: Power1.easeOut,
        duration: 0.7,
        paused: true,
        onComplete: () => {
          gsap.set(cardRef.current, { clearProps: 'all' });
        }
      });
    }

    if (inView && entry && entry.intersectionRatio >= 0.5) {
      tween.current.play();
    }

    return () => {
      tween.current?.kill();
    };
  }, [inView, entry]);

  return (
    <div ref={ref} className={classes.root}>
      <div ref={cardRef}>
        <div className={classes.thumbnail}>
          <img src={props.thumbnail} alt={props.title} />
        </div>
        <div className={classes.title}>
          <Typography variant="h6">{props.title}</Typography>
          <Typography variant="overline">{props.subtitle}</Typography>
        </div>
      </div>

      <div className={classes.index}>{props.index}</div>
    </div>
  );
};

export const Card = memo(_Card);

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      position: 'relative',
      margin: theme.spacing(5, 0),
      [theme.breakpoints.up('md')]: {
        width: '50%'
      }
    },
    thumbnail: {
      cursor: 'pointer',
      transition: 'transform 0.7s ease-out',
      overflow: 'hidden',

      '& img': {
        width: '100%',
        display: 'inline-block',
        verticalAlign: 'bottom',
        transition: 'transform 0.7s ease-out'
      },

      '&:hover': {
        transform: 'scale(0.95, 0.95)',
        transition: 'transform 0.7s ease-out'
      },

      '&:hover > img': {
        transform: 'scale(1.15, 1.15)',
        transition: 'transform 0.7s ease-out'
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
