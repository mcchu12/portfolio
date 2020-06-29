import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import { Theme } from 'theme';
import { Typography } from '../components';
import { RootState } from 'typesafe-actions';

import { fetchAboutAsync } from '../features/info/actions';

const mapStateToProps = (state: RootState) => ({
  about: state.info.about,
});

const dispatchProps = {
  fetchAbout: () => fetchAboutAsync.request(),
};

type Props = ReturnType<typeof mapStateToProps> & typeof dispatchProps;

const _About: FC<Props> = ({ about, fetchAbout }) => {
  const classes = useStyles();

  useEffect(() => {
    if (!about.intro) fetchAbout();
  }, [about, fetchAbout]);

  return (
    <article className={classes.root}>
      <section>
        <Typography className={classes.title}>
          Hello there, nice to meet you!
        </Typography>

        <div className={classes.introduction}>{about.intro}</div>
      </section>

      <section>
        <Typography className={classes.title}>What I know</Typography>
        <div className={classes.stack}>
          {about.skills.map((skill, index) => (
            <Typography key={index} variant="h6">
              {skill}
            </Typography>
          ))}
        </div>
      </section>
    </article>
  );
};

export const About = connect(mapStateToProps, dispatchProps)(_About);

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      minHeight: '100vh',
      color: 'white',
      display: 'flex',
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
