import React, { PureComponent } from 'react';
import { gsap, Power4 } from 'gsap';

type State = {
  text: string;
  splitText: string[][];
  numChars: number;
  isAnimationComplete: boolean;
};

type Props = {
  shouldPlayed?: boolean;
  onTweenCompleted?: () => void;
  delay?: number;
  children: string;
};

const parseText = (text: string) => {
  return {
    text,
    numChars: text.length,
    splitText: text.split(' ').map(word => word.split(''))
  };
};

export class AnimatedText extends PureComponent<Props, State> {
  static getDerivedStateFromProps({ children }: Props, state: State) {
    return !state || children !== state.text ? parseText(children) : null;
  }

  state = {
    text: '',
    splitText: [],
    numChars: 0,
    isAnimationComplete: false
  };

  charsElements: HTMLSpanElement[] = [];
  containerRef: HTMLDivElement | null = null;
  tween: gsap.core.Tween | null = null;

  componentDidMount() {
    this.tween = gsap.from(this.charsElements, {
      duration: 0.01,
      autoAlpha: 0,
      delay: this.props.delay || 0.2,
      ease: Power4.easeIn,
      stagger: 0.06,
      paused: true,
      onComplete: () => {
        this.setState({ ...this.state, isAnimationComplete: true });
        this.props.onTweenCompleted && this.props.onTweenCompleted();
      }
    });

    if (this.props.shouldPlayed) {
      this.tween.play();
    }
  }

  componentDidUpdate() {
    if (this.props.shouldPlayed && !this.state.isAnimationComplete) {
      this.tween?.play();
    }
  }

  componentWillUnmount() {
    this.tween?.kill();
  }

  renderChars = (word: string[]) => {
    const { text } = this.state;

    const chars = word.map((char, i) => (
      <span key={text + i} ref={el => el && this.charsElements.push(el)}>
        {char}
      </span>
    ));

    return chars;
  };

  renderWords = () => {
    const { text, splitText } = this.state;

    const numWords = splitText.length;

    return splitText.map((word, i) => {
      const chars = [
        ...this.renderChars(word),
        i !== numWords - 1 ? '\u00A0' : null
      ];

      return <span key={text! + i}>{chars}</span>;
    });
  };

  render() {
    const { isAnimationComplete } = this.state;
    return (
      <div>
        {isAnimationComplete && <div>{this.state.text}</div>}

        {!isAnimationComplete && (
          <div aria-hidden ref={div => (this.containerRef = div)}>
            {this.renderWords()}
          </div>
        )}
      </div>
    );
  }
}
