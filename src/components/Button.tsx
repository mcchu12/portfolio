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
        visibility: 'hidden',
        transform: 'scale(0)',
        transition: 'all 0.3s cubic-bezier(0.65, 0, 0.17, 0.98)'
      },
      '&:hover:before': {
        visibility: 'visible',
        transform: 'scale(1)'
      }
    },
    outlined: {
      padding: theme.spacing(1, 2),
      borderColor: theme.palette.background,
      borderWidth: '1px',
      borderRadius: theme.border.radius
    }
  }),
  { name: 'button' }
);
