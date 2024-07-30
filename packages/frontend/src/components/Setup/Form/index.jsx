import React from 'react';
import Header from '../Header';
import { Outlet, Routes, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const SetupForm = ({ parent }) => {
  return (
    <div className="container p-0 bg-light rounded text-dark">
      <Header headerText={'Game setup'} />
      <Routes>
        {parent.children.map((child, index) => (
          <Route
            path={child.path}
            index={child.index}
            key={index}
            element={
              <child.Element
                label={child.elementProps.label}
                btnText={child.elementProps.buttonText}
                btnColor={child.elementProps.buttonColorClass}
                FormElement={child.elementProps.FormElement}
                id={child.elementProps.id}
                name={child.name}
                schema={child.schema}
                {...child}
              />
            }
          />
        ))}
      </Routes>
      <Outlet />
    </div>
  );
};

SetupForm.propTypes = {
  parent: PropTypes.object,
};

export default SetupForm;
