import React, {
  FC,
  useRef,
  useEffect,
  createElement,
  createContext
} from 'react';
import { gsap, Power2 } from 'gsap';
import { makeStyles } from '@material-ui/styles';

type Props = {
  component?: string;
};

type ContextProps = {
  setSize?: () => void;
};

export const LerpContext = createContext<ContextProps>({});

export const LerpContainer: FC<Props> = ({ children, component = 'div' }) => {
  const classes = useStyles();
  const scrollableRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSize();
    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', setSize);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', setSize);
    };
  });

  const onScroll = (): void => {
    const scroll = window.pageYOffset || document.documentElement.scrollTop;

    gsap.to(scrollableRef.current, {
      y: -scroll,
      ease: Power2.easeOut,
      duration: 1
    });
  };

  const setSize = (): void => {
    document.body.style.height = `${scrollableRef.current?.scrollHeight ||
      0}px`;
  };

  return createElement(
    component,
    { className: classes.root },
    <div ref={scrollableRef}>
      <LerpContext.Provider value={{ setSize }}>
        {children}
      </LerpContext.Provider>
    </div>
  );
};

const useStyles = makeStyles(
  () => ({
    root: {
      position: 'fixed',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      overflow: 'hidden'
    }
  }),
  { name: 'lerp-container' }
);
