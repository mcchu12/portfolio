import { BREAKPOINTS } from '../values';

type BreakPointKeys = keyof typeof BREAKPOINTS;

export const createBreakpoints = {
  up: (key: BreakPointKeys) => `@media (min-width:${BREAKPOINTS[key]}px)`
};
