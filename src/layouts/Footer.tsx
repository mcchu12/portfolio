import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Theme } from 'theme';

import { Typography } from '../components';

const socials = [
  {
    url: 'mailto:ngcgchu@gmail.com?subject=Inquiry',
    icon: '/icons/email.png',
    name: 'email',
  },
  {
    url: 'https://github.com/mcchu12',
    icon: '/icons/github.png',
    name: 'github',
  },
  {
    url: 'https://www.linkedin.com/in/nguyen-chuong-chu-96b7911a8/',
    icon: '/icons/linkedin.png',
    name: 'linkedin',
  },
  {
    url: 'https://twitter.com/mcchu0',
    icon: '/icons/twitter.png',
    name: 'twitter',
  },
];

export const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      <section className={classes.contact}>
        <div>
          <Typography className={classes.title} variant="overline">
            Let's work together
          </Typography>
          <a href="mailto:ngcgchu@gmail.com?subject=Inquiry">
            <Typography className={classes.hello} variant="h6">
              Say
              <span />
              hello
            </Typography>
          </a>
        </div>
        <div className={classes.social}>
          {socials.map(({ url, icon, name }, index) => (
            <a href={url} key={index}>
              <img src={icon} alt={name} />
            </a>
          ))}
        </div>
      </section>
      <div className={classes.copyright}>All right reserved @MichaelChu</div>
    </footer>
  );
};

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      padding: theme.spacing(1, 0),
    },

    contact: {
      margin: theme.spacing(4, 0, 3),
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',

      '& > div': {
        margin: theme.spacing(2, 0),
      },
    },
    title: {
      opacity: 0.5,
      fontWeight: 500,
    },
    hello: {
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',

      '& span': {
        height: '2px',
        width: '48px',
        margin: theme.spacing(0, 1),
        display: 'inline-block',
        backgroundColor: theme.palette.common.white,
        transition: 'all 0.7s cubic-bezier(0.65, 0, 0.17, 0.98)',
      },

      '&:hover span': {
        width: 0,
        margin: '2px',
        transition: 'all 0.7s cubic-bezier(0.65, 0, 0.17, 0.98)',
      },
    },
    social: {
      '& img': {
        width: '16px',
        margin: theme.spacing(0, 2),
        cursor: 'pointer',
        transition: 'transform 0.3s ease-out',
      },

      '& img:hover': {
        transform: 'scale(1.3)',
        transition: 'transform 0.3s ease-out',
      },
    },
    copyright: {
      fontSize: '0.5em',
      opacity: 0.5,
      textTransform: 'capitalize',
    },
  }),
  { name: 'footer' }
);
