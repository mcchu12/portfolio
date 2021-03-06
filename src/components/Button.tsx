import React, { FC } from 'react';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import { Theme } from 'theme';

type Props = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  active?: boolean;
};

export const Button: FC<Props> = ({ children, onClick, active = false }) => {
  const classes = useStyles({ active });

  return (
    <button className={clsx(classes.root, classes.default)} onClick={onClick}>
      {children}
    </button>
  );
};

const useStyles = makeStyles<Theme, { active: boolean }>(
  (theme) => ({
    root: {
      background: 'none',
      border: 'none',
      fontFamily: theme.typography.fontFamily,
      cursor: 'pointer',
      color: 'inherit',

      '&:focus': {
        outline: 0,
      },
    },
    default: {
      position: 'relative',

      '&:before': {
        content: '""',
        position: 'absolute',
        width: '100%',
        height: '1px',
        bottom: 0,
        left: 0,
        backgroundColor: theme.palette.common.white,
        visibility: (props) => (props.active ? 'visible' : 'hidden'),
        transform: (props) => (props.active ? 'scale(1)' : 'scale(0)'),
      },
      '&:hover:before': {
        visibility: 'visible',
        transition: 'transform 0.3s cubic-bezier(0.65, 0, 0.17, 0.98)',
        transform: 'scale(1)',
      },
    },
  }),
  { name: 'button' }
);
