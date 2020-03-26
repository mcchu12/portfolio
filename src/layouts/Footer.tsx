import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Theme } from 'theme';

import { Typography } from '../components';

export const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      <section className={classes.contact}>
        <div>
          <Typography variant="overline">Let's work together</Typography>
          <Typography variant="h6">mcchu95@gmail.com</Typography>
        </div>
        <div className={classes.social}>
          <Typography variant="overline">Github</Typography>
          <Typography variant="overline">LinkedIn</Typography>
          <Typography variant="overline">Instagram</Typography>
        </div>
      </section>
      <div>
        <Typography variant="overline">
          All right reserved @MichaelChu
        </Typography>
      </div>
    </footer>
  );
};

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      marginBottom: theme.spacing(1)
    },

    contact: {
      margin: theme.spacing(6, 0, 3),
      padding: theme.spacing(6, 3),
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: theme.palette.background,
      boxShadow: theme.shadows.default
    },
    social: {
      '& span': {
        marginRight: theme.spacing(2)
      }
    }
  }),
  { name: 'footer' }
);
