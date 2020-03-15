import React, { PropsWithChildren } from 'react';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import { Theme } from 'theme';

type Props = {
  variant?: 'default' | 'outlined';
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const Button = React.forwardRef<
  HTMLButtonElement,
  PropsWithChildren<Props>
>(({ children, variant = 'default', onClick }, ref) => {
  const classes = useStyles();

  return (
    <button
      ref={ref}
      className={clsx(classes.root, classes[variant])}
      onClick={onClick}
    >
      {children}
    </button>
  );
});

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
