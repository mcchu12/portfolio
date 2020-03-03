import React, { FC } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Theme } from 'theme';

export const FlexBox: FC = props => {
  const classes = useStyles();

  return <div className={classes.root}>{props.children}</div>;
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(1, 2),
    border: '1px solid black'
  }
}));
