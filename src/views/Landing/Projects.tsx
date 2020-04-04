import React, { FC } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Theme } from 'theme';

import { Card, Typography } from '../../components';

const projects = [
  {
    index: '01',
    title: 'Crumbs',
    subtitle: 'HTML / CSS / JS',
    thumbnail: './images/crumbs2.jpg'
  },
  {
    index: '02',
    title: 'Dogify',
    subtitle: 'Angular2 / Python / Flask',
    thumbnail: './images/dogify.jpg'
  },
  {
    index: '03',
    title: 'Leahlou',
    subtitle: 'React / Redux',
    thumbnail: './images/leahlou.jpg'
  },
  {
    index: '04',
    title: 'Dollar',
    subtitle: 'React / Redux',
    thumbnail: './images/crumbs.jpg'
  }
];

export const Projects: FC = () => {
  const classes = useStyles();

  return (
    <article>
      <Typography variant="h4">Projects</Typography>
      <div className={classes.grid}>
        {projects.map(projects => (
          <Card key={projects.index} {...projects} />
        ))}
      </div>
    </article>
  );
};

const useStyles = makeStyles(
  (theme: Theme) => ({
    grid: {
      display: 'flex',
      flexDirection: 'column',

      [theme.breakpoints.up('md')]: {
        marginTop: theme.spacing(12),

        '& > div:nth-child(even)': {
          marginLeft: 'auto'
        }
      }
    }
  }),
  { name: 'feature-projects' }
);
