import React, { FC } from 'react';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import { Theme } from 'theme';

type Props = {
  variant?: 'default' | 'outlined';
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const Button: FC<Props> = ({
  children,
  variant = 'default',
  onClick
}) => {
  const classes = useStyles();

  return (
    <button className={clsx(classes.root, classes[variant])} onClick={onClick}>
      {children}
    </button>
  );
};

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      background: 'none',
      border: 'none',
      fontFamily: theme.typography.fontFamily,
      cursor: 'pointer',
      color: 'inherit',
      '&:focus': {
        outline: 0
      }
    },
    default: {},
    outlined: {
      padding: theme.spacing(1, 2),
      borderColor: theme.palette.background,
      borderWidth: '1px',
      borderRadius: theme.border.radius
    }
  }),
  { name: 'button' }
);
