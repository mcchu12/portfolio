import React, { FC } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Theme } from 'theme';
import { Typography } from '../components/Typography';

export const Landing: FC = () => {
  const classes = useStyles();

  return (
    <article className={classes.root}>
      <div className={classes.container}>
        <div className={classes.intro}>
          <Typography variant="span">Michael Chu</Typography>
          <Typography variant="span">Full stack web developer</Typography>
          <Typography variant="span">Based in Toronto, CA</Typography>
        </div>
      </div>
    </article>
  );
};

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      height: '100%',
      padding: theme.spacing(4),
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    },
    container: {
      width: '100%',
      maxWidth: '80vw',
      margin: '0 auto'
    },
    intro: {
      '& span': {
        display: 'block',
        ...theme.typography.h5
      }
    }
  }),
  { name: 'landing' }
);
