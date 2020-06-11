import React, { FC } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Theme } from 'theme';

type Props = {
  url: string;
  name: string;
  icon: string;
  margin?: number;
};

export const IconButton: FC<Props> = ({ name, url, icon, margin = 0 }) => {
  const classes = useStyles({ margin });
  return (
    <a className={classes.root} href={url}>
      <img src={icon} alt={name} />
    </a>
  );
};

const useStyles = makeStyles<Theme, { margin: number }>((theme) => ({
  root: {
    '& img': {
      width: '16px',
      marginRight: ({ margin }) => theme.spacing(margin),
      cursor: 'pointer',
      transition: 'transform 0.3s ease-out',
    },

    '& img:hover': {
      transform: 'scale(1.3)',
      transition: 'transform 0.3s ease-out',
    },
  },
}));
