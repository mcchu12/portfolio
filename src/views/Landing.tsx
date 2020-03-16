import React, { FC, useState, useRef, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { gsap, Power0 } from 'gsap';
import { Theme } from 'theme';
import {
  ScrollArrow,
  AnimatedText,
  Card,
  Typography,
  Button
} from '../components';

const connections = ['github', 'linkedin', 'resume'];
const projects = [
  {
    index: '01',
    title: 'Crumbs',
    subtitle: 'HTML / CSS / JS',
    thumbnail: './images/crumbs.jpg'
  },
  {
    index: '02',
    title: 'Dogify',
    subtitle: 'Angular2 / Python / Flask',
    thumbnail: './images/dogify.jpg'
  },
  {
    index: '03',
    title: 'Leahlou',
    subtitle: 'React / Redux',
    thumbnail: './images/leahlou.jpg'
  },
  {
    index: '04',
    title: 'Dollar',
    subtitle: 'React / Redux',
    thumbnail: './images/crumbs2.jpg'
  }
];

export const Landing: FC = () => {
  const classes = useStyles();
  const tweenRef = useRef<gsap.core.Tween>();
  const counter = useRef(0);
  const [state, setState] = useState(0);
  const [showImages, setShowImages] = useState(false);

  const buttonElements: HTMLButtonElement[] = [];

  useEffect(() => {
    tweenRef.current = gsap.fromTo(
      buttonElements,
      { opacity: 0, y: 10 },
      {
        duration: 0.2,
        delay: 0.2,
        opacity: 1,
        y: 0,
        ease: Power0.easeOut,
        stagger: 0.2,
        paused: true
      }
    );
  }, [buttonElements]);

  const handleLoaded = () => {
    counter.current += 1;
    console.log('counter');
    if (counter.current >= projects.length) setShowImages(true);
  };

  const renderIntro = () => {
    return (
      <div className={classes.intro}>
        <AnimatedText
          shouldPlayed={state === 0}
          onTweenCompleted={() => setState(1)}
          delay={1}
        >
          Michael Chu
        </AnimatedText>
        <AnimatedText
          shouldPlayed={state === 1}
          onTweenCompleted={() => setState(2)}
        >
          Full stack web developer
        </AnimatedText>
        <AnimatedText
          shouldPlayed={state === 2}
          onTweenCompleted={() => {
            tweenRef.current?.play();
          }}
        >
          Based in Toronto, CA
        </AnimatedText>
      </div>
    );
  };

  return (
    <div className={classes.root}>
      <article className={classes.container}>
        <div>
          {renderIntro()}
          <div className={classes.connect}>
            {connections.map((connection, index) => (
              <Button
                key={index}
                ref={btn => btn && (buttonElements[index] = btn)}
              >
                <Typography variant="overline">{connection}</Typography>
              </Button>
            ))}
          </div>
        </div>
        <ScrollArrow />
      </article>

      <article className={classes.grid}>
        {projects.map(projects => (
          <Card
            key={projects.index}
            {...projects}
            onImageLoaded={handleLoaded}
          />
        ))}
      </article>
    </div>
  );
};

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      margin: '0 auto',
      padding: theme.spacing(0, 3),
      [theme.breakpoints.up('sm')]: {
        maxWidth: '80vw',
        padding: theme.spacing(0, 4)
      }
    },
    container: {
      width: '100%',
      minHeight: '100vh',

      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      position: 'relative'
    },
    grid: {
      display: 'flex',
      flexDirection: 'column',
      [theme.breakpoints.up('md')]: {
        '& div:nth-child(even)': {
          marginLeft: 'auto'
        }
      }
    },
    intro: {
      '& > div': {
        ...theme.typography.h5
      }
    },
    connect: {
      marginTop: theme.spacing(1.5),
      '& > button': {
        marginRight: theme.spacing(3)
      }
    }
  }),
  { name: 'landing' }
);
