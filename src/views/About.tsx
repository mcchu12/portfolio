import React, { FC } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Theme } from 'theme';
import { Typography } from '../components';

const stacks = [
  'HTML',
  'CSS',
  'Javascript',
  'Typescript',
  'React',
  'Angular2',
  'NodeJS',
  'Flutter',
  'Illustrator',
];

export const About: FC = () => {
  const classes = useStyles();

  return (
    <article className={classes.root}>
      <section>
        <Typography className={classes.title}>
          Hello there, nice to meet you!
        </Typography>

        <div className={classes.introduction}>
          I'm Michael and currently living in Toronto. I taught myself coding. I
          enjoy learning new things so I can do a bit of everything. My main
          expertise is front end development (React).
        </div>
      </section>

      <section>
        <Typography className={classes.title}>What I know</Typography>
        <div className={classes.stack}>
          {stacks.map((stack, index) => (
            <Typography key={index} variant="h6">
              {stack}
            </Typography>
          ))}
        </div>
      </section>
    </article>
  );
};

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      minHeight: '100vh',
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',

      '& section': {
        margin: theme.spacing(5, 0),
      },
    },

    title: {
      margin: theme.spacing(2, 0),
      ...theme.typography.body1,
      textTransform: 'uppercase',
      fontWeight: 500,
      opacity: 0.5,
    },

    introduction: {
      ...theme.typography.h5,

      [theme.breakpoints.up('md')]: {
        paddingRight: theme.spacing(4),
      },
    },

    stack: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gridTemplateRows: '1fr 1fr',
      gridRowGap: theme.spacing(0.5),
    },
  }),
  { name: 'about' }
);
