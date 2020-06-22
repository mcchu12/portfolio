import React, { FC, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { Theme } from 'theme';
import { RootState } from 'typesafe-actions';

import { Card, Typography } from '../../components';
import { fetchProjectsAsync } from '../../features/projects/actions';

const mapStateToProps = (state: RootState) => ({
  projects: state.projects,
});

const dispatchProps = {
  fetchProjects: () => fetchProjectsAsync.request(),
};

type Props = ReturnType<typeof mapStateToProps> & typeof dispatchProps;

const _Projects: FC<Props> = ({ fetchProjects, projects }) => {
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  return (
    <article>
      <Typography className={classes.title} variant="h6">
        Projects
      </Typography>
      <div className={classes.grid}>
        {Object.values(projects).map(({ index, thumbnail, name, stacks }) => (
          <Card
            key={index}
            thumbnail={thumbnail}
            index={index < 10 ? `0${index}` : index.toString()}
            title={name}
            subtitle={stacks}
            onClick={() => history.push(`/projects/${name}`)}
          />
        ))}
      </div>
    </article>
  );
};

export const Projects = connect(mapStateToProps, dispatchProps)(_Projects);

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
