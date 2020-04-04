import React from 'react';
import { withStyles, createStyles } from '@material-ui/styles';
import { gsap, Power0 } from 'gsap';
import { Theme } from 'theme';

import {
  Button,
  Typography,
  AnimatedText,
  ScrollArrow
} from '../../components';

const connections = ['github', 'linkedin', 'resume'];

type Props = {
  classes: {
    root: string;
    greeting: string;
    socialLink: string;
  };
};

type State = {
  textAnim: number;
  scrollAnim: boolean;
};

class _Intro extends React.Component<Props, State> {
  tween: gsap.core.Tween;
  buttonContainer: HTMLDivElement | null;

  state = {
    textAnim: 0,
    scrollAnim: false
  };

  componentDidMount() {
    if (!this.buttonContainer) return;
    const btns = this.buttonContainer.children;

    this.tween = gsap.from(btns, {
      y: 10,
      autoAlpha: 0,
      rotation: 0.01,
      duration: 0.2,
      delay: 0.2,
      force3D: true,
      ease: Power0.easeOut,
      stagger: 0.2,
      paused: true,
      onComplete: () => {
        this.setState({ ...this.state, scrollAnim: true });
        gsap.set(btns, { clearProps: 'all' });
      }
    });
  }

  componentWillUnmount() {
    this.tween.kill();
  }

  renderIntro = () => {
    const { textAnim } = this.state;

    return (
      <div className={this.props.classes.greeting}>
        <AnimatedText
          shouldPlayed={textAnim === 0}
          onTweenCompleted={() => this.setState({ ...this.state, textAnim: 1 })}
          delay={1}
        >
          Michael Chu
        </AnimatedText>
        <AnimatedText
          shouldPlayed={textAnim === 1}
          onTweenCompleted={() => this.setState({ ...this.state, textAnim: 2 })}
        >
          Full stack web developer
        </AnimatedText>
        <AnimatedText
          shouldPlayed={textAnim === 2}
          onTweenCompleted={() => {
            this.tween.play();
          }}
        >
          Based in Toronto, CA
        </AnimatedText>
      </div>
    );
  };

  render() {
    const { classes } = this.props;
    return (
      <article className={classes.root}>
        {this.renderIntro()}

        <div
          ref={el => (this.buttonContainer = el)}
          className={classes.socialLink}
        >
          {connections.map((connection, index) => (
            <Button key={index}>
              <Typography variant="overline">{connection}</Typography>
            </Button>
          ))}
        </div>
        <ScrollArrow shouldPlayed={this.state.scrollAnim} />
      </article>
    );
  }
}

const styles = (theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      minHeight: '100vh',

      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      position: 'relative'
    },
    greeting: {
      '& > div': {
        ...theme.typography.h5
      }
    },
    socialLink: {
      marginTop: theme.spacing(1.5),
      '& button': {
        marginRight: theme.spacing(3)
      }
    }
  });

export const Intro = withStyles(styles)(_Intro);
