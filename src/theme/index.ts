import { createSpacing, createBreakpoints, createPalette } from './utils';
import { BORDERS, SPACING, BREAKPOINTS, COLORS } from './values';

export const theme = {
  spacing: createSpacing(SPACING),
  breakpoints: createBreakpoints(BREAKPOINTS),
  palette: createPalette(COLORS),
  border: BORDERS
};

export default theme;
