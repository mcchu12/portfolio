import React, { FC, memo } from 'react';
import Particles, { IParticlesParams } from 'react-particles-js';
import { makeStyles } from '@material-ui/styles';

const _Background: FC = () => {
  const classes = useStyles();

  const isFirefox = 'InstallTrigger' in window && true;

  const options: IParticlesParams = {
    particles: {
      number: {
        value: 40,
        density: {
          enable: false
        }
      },
      color: {
        value: '000000'
      },
      size: {
        value: 3,
        random: true,
        anim: {
          speed: 3,
          size_min: 0.3
        }
      },
      line_linked: {
        enable: false
      },
      opacity: {
        value: 0.5,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0
        }
      },
      move: {
        random: true,
        speed: 5,
        direction: 'top-left',
        out_mode: 'out'
      }
    },
    interactivity: {
      events: {
        onclick: {
          enable: true,
          mode: 'repulse'
        }
      },
      modes: {
        bubble: {
          distance: 250,
          duration: 2,
          size: 0,
          opacity: 0
        },
        repulse: {
          distance: 200,
          duration: 5
        }
      },
      detect_on: 'window'
    }
  };

  return !isFirefox ? (
    <Particles className={classes.root} params={options} />
  ) : (
    <></>
  );
};

export const Background = memo(_Background);

const useStyles = makeStyles(
  () => ({
    root: {
      '& canvas': {
        position: 'fixed',
        top: 0,
        left: 0,
        background: 'linear-gradient(135deg, #3c3c3c, #000000)'
      }
    }
  }),
  { name: 'background' }
);
