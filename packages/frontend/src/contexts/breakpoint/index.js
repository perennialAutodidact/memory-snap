import { createContext } from 'react';

export const initialBreakpointState = {
  breakpoint: 'sm',
  isMobile: true,
  isPortrait: true,
  isLandscape: false,
};

export const BreakpointContext = createContext(initialBreakpointState);
