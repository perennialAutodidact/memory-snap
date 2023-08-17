import { render, screen } from "@testing-library/react";

const setupTests = (Component, { props, state } = {}) => {
  render(<Component {...props} />);
};

export { setupTests, screen };
