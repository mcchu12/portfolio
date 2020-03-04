import { createSpacing, createBreakpoints, palette } from './utils';
import { BORDERS as border, SPACING, BREAKPOINTS } from './values';

export const theme = {
  spacing: createSpacing(SPACING),
  breakpoints: createBreakpoints(BREAKPOINTS),
  palette,
  border
};

export default theme;
