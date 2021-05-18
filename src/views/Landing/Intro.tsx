import React, { useRef, useState, FC, useCallback } from 'react';
import _ from 'lodash';
import { makeStyles } from '@material-ui/styles';
import { gsap } from 'gsap';
import { Theme } from 'theme';
import { RootState } from 'typesafe-actions';

import {
  Button,
  Typography,
  AnimatedText,
  ScrollArrow,
} from '../../components';
import { connect } from 'react-redux';

const mapStateToProps = (state: RootState) => ({
  socials: _.pick(state.info.social, ['github', 'linkedin', 'resume']),
});

type Props = ReturnType<typeof mapStateToProps>;

type State = {
  textAnim: number;
  scrollAnim: boolean;
};

const _Intro: FC<Props> = ({ socials }) => {
  const classes = useStyles();
  const [scrollAnim, setScrollAnim] = useState<boolean>(false);
  const [textAnim, setTextAnim] = useState<number>(0);
  const btnContainerRef = useRef<HTMLDivElement>(null);

  const animateButtons = useCallback(() => {
    if (!btnContainerRef.current) return;
    const btns = btnContainerRef.current.children;
    gsap.to(btns, {
      y: 0,
      opacity: 1,
      stagger: 0.1,
      onComplete: () => setScrollAnim(true),
    });
  }, []);

  const renderIntro = () => (
    <div className={classes.greeting}>
      <AnimatedText
        shouldPlayed={textAnim === 0}
        onTweenCompleted={() => setTextAnim(1)}
        delay={1}
      >
        Michael Chu
      </AnimatedText>
      <AnimatedText
        shouldPlayed={textAnim === 1}
        onTweenCompleted={() => setTextAnim(2)}
      >
        Frontend web developer
      </AnimatedText>
      <AnimatedText
        shouldPlayed={textAnim === 2}
        onTweenCompleted={() => {
          animateButtons();
        }}
      >
        Based in Toronto, CA
      </AnimatedText>
    </div>
  );

  const renderSocials = () => (
    <div ref={btnContainerRef} className={classes.socialLink}>
      {Object.values(socials).map(({ name, url }, index) => (
        <Button key={index}>
          <Typography variant="overline">
            <a href={url} target="_blank" rel="noopener noreferrer">
              {name}
            </a>
          </Typography>
        </Button>
      ))}
    </div>
  );

  return (
    <article className={classes.root}>
      <div className={classes.container}>
        {renderIntro()}
        {renderSocials()}
      </div>

      <ScrollArrow shouldPlayed={scrollAnim} />
    </article>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    minHeight: 'calc(100vh - 96px)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'relative',
  },
  container: {
    marginBottom: '96px',
  },
  greeting: {
    '& > div': {
      ...theme.typography.h5,
    },
  },
  socialLink: {
    marginTop: theme.spacing(1.5),

    '& button': {
      marginRight: theme.spacing(3),
      opacity: 0,
      transform: 'translateY(10px)',
    },
  },
}));

export const Intro = connect(mapStateToProps, {})(_Intro);
