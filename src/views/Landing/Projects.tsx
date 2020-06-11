import React, { FC } from 'react';
import { makeStyles } from '@material-ui/styles';
import { useHistory } from 'react-router-dom';
import { Theme } from 'theme';

import { Card, Typography } from '../../components';

const projects = [
  {
    index: '01',
    title: 'Crumbs',
    subtitle: 'HTML / CSS / JS',
    thumbnail: './images/crumbs.jpg',
  },
  {
    index: '02',
    title: 'Dogify',
    subtitle: 'Angular2 / Python / Flask',
    thumbnail: './images/dogify.jpg',
  },
  {
    index: '03',
    title: 'Leahlou',
    subtitle: 'React / Redux',
    thumbnail: './images/leahlou.jpg',
  },
  {
    index: '04',
    title: 'Notes',
    subtitle: 'React / Redux',
    thumbnail: './images/notes.jpg',
  },
];

export const Projects: FC = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <article>
      <Typography className={classes.title} variant="h6">
        Projects
      </Typography>
      <div className={classes.grid}>
        {projects.map((project, index) => (
          <Card
            key={project.index}
            {...project}
            onClick={() => history.push(`/projects/${index}`)}
          />
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
          alignSelf: 'flex-end',
        },
      },
    },
  }),
  { name: 'feature-projects' }
);
