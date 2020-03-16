import React, { FC, useRef, useContext } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Theme } from 'theme';

import { LerpContext } from '../../layouts';
import { Card } from '../../components';

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
  const counter = useRef(0);

  const context = useContext(LerpContext);

  const handleLoaded = () => {
    const { setSize } = context;

    counter.current += 1;
    if (counter.current >= projects.length) setSize && setSize();
  };

  return (
    <article className={classes.root}>
      {projects.map(projects => (
        <Card key={projects.index} {...projects} onImageLoaded={handleLoaded} />
      ))}
    </article>
  );
};

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      [theme.breakpoints.up('md')]: {
        '& div:nth-child(even)': {
          marginLeft: 'auto'
        }
      }
    }
  }),
  { name: 'feature-projects' }
);
