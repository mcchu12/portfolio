import {
  createSpacing,
  createBreakpoints,
  createPalette,
  createTypography
} from './utils';
import { BORDERS, SPACING, BREAKPOINTS, COLORS, TYPOGRAPHY } from './values';

export const theme = {
  spacing: createSpacing(SPACING),
  breakpoints: createBreakpoints(BREAKPOINTS),
  palette: createPalette(COLORS),
  typography: createTypography(TYPOGRAPHY),
  border: BORDERS
};

export default theme;
