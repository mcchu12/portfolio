import React, { FC } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import { Theme } from 'theme';

import { Typography, IconButton } from '../components';
import { RootState } from 'typesafe-actions';

const mapStateToProps = (state: RootState) => ({
  socials: _.pick(state.info.social, [
    'email',
    'github',
    'twitter',
    'linkedin',
  ]),
});

const dispatchProps = {};

type Props = ReturnType<typeof mapStateToProps> & typeof dispatchProps;

const _Footer: FC<Props> = ({ socials }) => {
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      <section className={classes.contact}>
        {socials.email && (
          <div>
            <Typography className={classes.title} variant="overline">
              Let's work together
            </Typography>
            <a href={socials.email.url}>
              <Typography className={classes.hello} variant="h6">
                Say
                <span />
                hello
              </Typography>
            </a>
          </div>
        )}

        <div>
          {Object.values(socials).map((social, index) => (
            <IconButton {...social} key={index} margin={3} />
          ))}
        </div>
      </section>

      <div className={classes.copyright}>All right reserved @MichaelChu</div>
    </footer>
  );
};

export const Footer = connect(mapStateToProps, dispatchProps)(_Footer);

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      padding: theme.spacing(1, 0),
    },

    contact: {
      margin: theme.spacing(4, 0, 3),
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',

      '& > div': {
        margin: theme.spacing(2, 0),
      },
    },
    title: {
      opacity: 0.5,
      fontWeight: 500,
    },
    hello: {
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',

      '& span': {
        height: '2px',
        width: '48px',
        margin: theme.spacing(0, 1),
        display: 'inline-block',
        backgroundColor: theme.palette.common.white,
        transition: 'all 0.7s cubic-bezier(0.65, 0, 0.17, 0.98)',
      },

      '&:hover span': {
        width: 0,
        margin: '2px',
        transition: 'all 0.7s cubic-bezier(0.65, 0, 0.17, 0.98)',
      },
    },
    copyright: {
      fontSize: '0.5em',
      opacity: 0.5,
      textTransform: 'capitalize',
    },
  }),
  { name: 'footer' }
);
