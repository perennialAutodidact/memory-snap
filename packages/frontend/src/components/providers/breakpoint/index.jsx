import React, { useEffect, useState, useMemo } from 'react';
import { BreakpointContext } from 'contexts/breakpoint';
import { BREAKPOINTS } from 'utils/breakpoints';
import { useWindowSize } from '@uidotdev/usehooks';
import PropTypes from 'prop-types';

const BreakpointProvider = ({ children }) => {
  const { sm, md, lg, xl, xxl } = BREAKPOINTS;
  const [breakpoint, setBreakpoint] = useState('sm');
  const size = useWindowSize();

  const { width, height } = size;

  useEffect(() => {
    let breakpoint = '';

    if (width < sm) {
      breakpoint = 'xs';
    } else if (width < md) {
      breakpoint = 'sm';
    } else if (width < lg) {
      breakpoint = 'md';
    } else if (width < xl) {
      breakpoint = 'lg';
    } else if (width < xxl) {
      breakpoint = 'xl';
    } else {
      breakpoint = 'xxl';
    }
    setBreakpoint(breakpoint);
  }, [size, sm, md, lg, xl, xxl, width]);

  const isLandscape = useMemo(() => width >= height, [width, height]);

  const isPortrait = useMemo(() => width < height, [width, height]);

  return (
    <BreakpointContext.Provider
      value={{ width, height, isLandscape, isPortrait, breakpoint }}
    >
      {children}
    </BreakpointContext.Provider>
  );
};

BreakpointProvider.propTypes = {
  children: PropTypes.node,
};

export default BreakpointProvider;
