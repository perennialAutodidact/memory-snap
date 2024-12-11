/**
 * takes a child object
 * @param {object} setupRoute an array of player objects
 * @returns {object} formStepProps containing the props for a form step
 */

const getFormStepPropsFromRouteChild = setupRoute => {
  const childKeys = ['name', 'schema'];
  const elementProps = setupRoute.elementProps;

  const filteredKeys = Object.fromEntries(
    Object.entries(setupRoute).filter(([key]) => childKeys.includes(key))
  );
  let formStepProps = { ...filteredKeys, ...elementProps };

  return formStepProps;
};

export { getFormStepPropsFromRouteChild };
