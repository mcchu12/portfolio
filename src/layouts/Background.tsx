import React, { FC } from 'react';
import Particles, { IParticlesParams } from 'react-particles-js';
import { makeStyles } from '@material-ui/styles';
import { Theme } from 'theme';

export const Background: FC = () => {
  const classes = useStyles();

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

  return <Particles className={classes.root} params={options} />;
};

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: -10,
      background: 'linear-gradient(135deg, #3c3c3c, #000000)'
    }
  }),
  { name: 'background' }
);
