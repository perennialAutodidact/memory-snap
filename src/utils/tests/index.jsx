import { render } from "@testing-library/react";

export const setupTests = (Component, { props, state }) => {
  render(<Component {...props} />);
};
