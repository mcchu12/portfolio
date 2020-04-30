import React, { FC } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Theme } from 'theme';

import { Card, Typography } from '../../components';

const projects = [
  {
    index: '01',
    title: 'Crumbs',
    subtitle: 'HTML / CSS / JS',
    thumbnail: './images/crumbs.jpg',
    url: 'https://crumbs-3c245.web.app/',
  },
  {
    index: '02',
    title: 'Dogify',
    subtitle: 'Angular2 / Python / Flask',
    thumbnail: './images/dogify.jpg',
    url: 'https://dogifi.herokuapp.com/',
  },
  {
    index: '03',
    title: 'Leahlou',
    subtitle: 'React / Redux',
    thumbnail: './images/leahlou.jpg',
    url: 'https://leahlouabellanosa.co/',
  },
  {
    index: '04',
    title: 'Dollar',
    subtitle: 'React / Redux',
    thumbnail: './images/dollar.jpg',
    url: 'https://onroll.web.app/',
  },
];

export const Projects: FC = () => {
  const classes = useStyles();

  return (
    <article>
      <Typography className={classes.title} variant="h6">
        Projects
      </Typography>
      <div className={classes.grid}>
        {projects.map((projects) => (
          <Card key={projects.index} {...projects} />
        ))}
      </div>
    </article>
  );
};

const useStyles = makeStyles(
  (theme: Theme) => ({
    title: {
      textTransform: 'uppercase',
    },
    grid: {
      display: 'flex',
      flexDirection: 'column',

      [theme.breakpoints.up('md')]: {
        marginTop: theme.spacing(12),

        '& > div:nth-child(even)': {
          marginLeft: 'auto',
        },
      },
    },
  }),
  { name: 'feature-projects' }
);
