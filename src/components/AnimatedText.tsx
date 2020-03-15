import React, { FC, useRef, useEffect, useState } from 'react';
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
};

const parseText = (text: string) => {
  return {
    text,
    numChars: text.length,
    splitText: text.split(' ').map(word => word.split(''))
  };
};

export const AnimatedText: FC<Props> = ({
  children,
  shouldPlayed = true,
  onTweenCompleted,
  delay
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween>();

  const [state, setState] = useState<State>({
    text: '',
    splitText: [],
    numChars: 0,
    isAnimationComplete: false
  });

  const charsElements: HTMLDivElement[] = [];

  if (typeof children === 'string' && state.text !== children)
    setState({ ...state, ...parseText(children) });

  useEffect(() => {
    if (!tweenRef.current)
      tweenRef.current = gsap.from(charsElements, {
        duration: 0.01,
        opacity: 0,
        delay: delay || 0.2,
        ease: Power4.easeIn,
        stagger: 0.06,
        paused: true,
        onComplete: () => {
          setState({ ...state, isAnimationComplete: true });
          onTweenCompleted && onTweenCompleted();
        }
      });

    if (shouldPlayed) tweenRef.current.play();
  }, [charsElements, shouldPlayed, onTweenCompleted, delay, state]);

  const splitStyles = { display: 'inline-block' };

  const renderChars = (word: string[]) => {
    const { text } = state;

    const chars = word.map((char, i) => (
      <div
        key={text + i}
        style={splitStyles}
        ref={el => el && charsElements.push(el)}
      >
        {char}
      </div>
    ));

    return chars;
  };

  const renderWords = () => {
    const { text, splitText } = state;

    const numWords = splitText.length;

    return splitText.map((word, i) => {
      const chars = [
        ...renderChars(word),
        i !== numWords - 1 ? '\u00A0' : null
      ];

      return (
        <div key={text! + i} style={{ display: 'inline-block' }}>
          {chars}
        </div>
      );
    });
  };

  return (
    <div>
      <div className="sr-only">{state.text}</div>
      <div aria-hidden ref={containerRef}>
        {renderWords()}
      </div>
    </div>
  );
};
