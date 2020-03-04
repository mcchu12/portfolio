import { SPACING } from '../values';

export const createSpacing = (...arg: number[]): number | string => {
  if (!(arg.length <= 4)) {
    return 0;
  }

  const transform = (factor: number) => SPACING * factor;

  if (arg.length === 0) return transform(1);

  if (arg.length === 1) return transform(arg[0]);

  return arg
    .map(factor => {
      const output = transform(factor).toString();
      return ''.concat(output, 'px');
    })
    .join(' ');
};
