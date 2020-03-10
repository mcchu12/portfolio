import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Theme } from 'theme';

// import { Typography } from './Typography';

export const ScrollArrow = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <Typography className={classes.text} variant="overline">
        Scroll
      </Typography> */}
      {/* <img
        className={classes.arrow}
        src="/images/down-arrow.svg"
        alt="down arrow"
      /> */}
      <div className={classes.arrow}>
        <div className={classes.chevron}></div>
        <div className={classes.chevron}></div>
        <div className={classes.chevron}></div>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) => {
  const base = 0.2;

  return {
    root: {
      maxWidth: theme.spacing(3),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'absolute',
      bottom: theme.spacing(8),
      right: theme.spacing(4)
    },
    '@keyframes move-chevron': {
      '25%': {
        opacity: 1
      },
      '33.3%': {
        opacity: 1,
        transform: `translateY(${base * 3.8}rem)`
      },
      '66.6%': {
        opacity: 1,
        transform: `translateY(${base * 5.2}rem)`
      },
      '100%': {
        opacity: 0,
        transform: `translateY(${base * 8}rem) scale(0.5)`
      }
    },
    arrow: {
      width: '100%',
      padding: theme.spacing(0.5),
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    chevron: {
      position: 'absolute',
      width: `${base * 3.5}rem`,
      height: `${base * 0.8}rem`,
      opacity: 0,
      transform: 'scale(0.3)',
      animation: '$move-chevron 5s ease-out infinite',
      '&:first-child': {
        animation: '$move-chevron 5s ease-out 1.67s infinite'
      },
      '&:nth-child(2)': {
        animation: '$move-chevron 5s ease-out 3.33s infinite'
      },
      '&:before, &:after': {
        content: '""',
        position: 'absolute',
        top: 0,
        width: '50%',
        height: '100%',
        background: '#888888'
      },
      '&:before': {
        left: 0,
        transform: 'skewY(30deg)'
      },
      '&:after': {
        right: 0,
        width: '50%',
        transform: 'skewY(-30deg)'
      }
    },
    text: {
      writingMode: 'vertical-lr'
    }
  };
});
