import React, { FC, useEffect } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { match, useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import { Theme } from 'theme';

import { Typography, IconButton } from '../components';
import { RootState } from 'typesafe-actions';
import { fetchProjectAsync } from '../features/projects/actions';

type OwnProps = {
  match: match<{ id: string }>;
};

const mapStateToProps = (state: RootState, { match }: OwnProps) => ({
  project: _.find(
    state.projects,
    (project) => project.name === match.params.id
  ),
});

const dispatchProps = {
  fetchProject: (name: string) => fetchProjectAsync.request(name),
};

type Props = ReturnType<typeof mapStateToProps> & typeof dispatchProps;

const _Project: FC<Props> = ({ project, fetchProject }) => {
  const classes = useStyles();

  const params = useParams<{ id: string }>();

  useEffect(() => {
    if (!project) {
      fetchProject(params.id);
    }
  }, [fetchProject, params, project]);

  return (
    <div className={classes.root}>
      {project && (
        <article>
          <Typography variant="h5" className={classes.capitalize}>
            {project.name}
          </Typography>

          <div className={classes.grid}>
            <div>
              <Typography className={classes.overview} variant="body1">
                {project.overview}
              </Typography>

              <div className={classes.detail}>
                <div>
                  <Typography variant="overline">Client</Typography>
                  <Typography variant="body2">{project.client}</Typography>
                </div>
                <div>
                  <Typography variant="overline">Date</Typography>
                  <Typography variant="body2">{project.date}</Typography>
                </div>
                <div>
                  <Typography variant="overline">Role</Typography>
                  <Typography variant="body2">{project.role}</Typography>
                </div>
              </div>
            </div>

            <div>
              {project.github && (
                <IconButton
                  url={project.github}
                  icon="/icons/github.png"
                  name="github"
                  margin={2}
                />
              )}
              <IconButton
                url={project.demo}
                icon="/icons/website.png"
                name="website"
              />
            </div>
          </div>

          <div className={classes.showcase}>
            {project.examples.map(({ src, type }, index) => {
              return type === 'video/mp4' ? (
                <video key={index} autoPlay loop muted>
                  <source src={src} type="video/mp4" />
                </video>
              ) : (
                <img key={index} src={src} alt={project.name} />
              );
            })}
          </div>
        </article>
      )}
    </div>
  );
};

export const Project = connect(mapStateToProps, dispatchProps)(_Project);

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minHeight: '100vh',
    color: 'white',
  },
  grid: {
    margin: theme.spacing(3, 0),
  },
  overview: {
    [theme.breakpoints.up('sm')]: {
      maxWidth: '500px',
    },
  },
  capitalize: {
    textTransform: 'capitalize',
  },
  detail: {
    margin: theme.spacing(4, 0),
    display: 'flex',

    '& > div': {
      marginRight: theme.spacing(6),
    },

    '& span': {
      color: theme.palette.text.primaryLight,
    },

    '& p': {
      textTransform: 'capitalize',
    },
  },
  showcase: {
    margin: theme.spacing(8, 0),

    '& img, & video': {
      margin: theme.spacing(2, 0),
      width: '100%',
    },
  },
}));
