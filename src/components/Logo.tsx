import React, { FC, memo } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Theme } from 'theme';

type Props = {
  onClick?: () => void;
};

const _Logo: FC<Props> = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root} onClick={props.onClick}>
      <img src="/icons/logo.png" alt="logo" />
    </div>
  );
};

export const Logo = memo(_Logo);

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      cursor: 'pointer',
      '& img': {
        width: '100%',
        maxWidth: theme.spacing(4),
        maxHeight: theme.spacing(4),
      },
    },
  }),
  { name: 'logo' }
);
