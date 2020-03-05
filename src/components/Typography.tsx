import React, { FC } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Theme } from 'theme';

const variantMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'h6',
  subtitle2: 'h6',
  body1: 'p',
  body2: 'p'
};

type Variant = keyof typeof variantMapping;

interface Props {
  variant: Variant;
}

export const Typography: FC<Props> = props => {
  const classes = useStyles();

  const { variant = 'body1' } = props;

  return <div>Typography</div>;
};

const useStyles = makeStyles((theme: Theme) => ({}), { name: 'typography' });
