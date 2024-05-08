import React from 'react';
import Header from '../Header';
import { Outlet, Routes, Route } from 'react-router-dom';

// eslint-disable-next-line
const SetupForm = ({ parent }) => {
  // eslint-disable-next-line
  console.log(parent.children.map(child => child.index))
  return (
    <div className="container p-0 bg-light rounded text-dark">
      <Header headerText={'Game setup'} />
      <Routes>
        {/* eslint-disable-next-line */}
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

export default SetupForm;
