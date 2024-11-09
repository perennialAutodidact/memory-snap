import React from 'react';
import { FormHeader } from '../Header';
import { Outlet, Routes, Route } from 'react-router-dom';
import Proptypes from 'Proptypes';

const SetupForm = ({ route }) => {
  return (
    <div className="container p-0 bg-light rounded text-dark">
      <FormHeader text={'Game setup'} />
      <Routes>
        {route.children.map((child, index) => (
          <Route
            path={child.path}
            index={child.index}
            key={index}
            element={
              <child.Element
                label={child.elementProps.label}
                btnText={child.elementProps.buttonText}
                btnColorClass={child.elementProps.buttonColorClass}
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

SetupForm.propTypes = Proptypes.Form.SetupForm;

export default SetupForm;
