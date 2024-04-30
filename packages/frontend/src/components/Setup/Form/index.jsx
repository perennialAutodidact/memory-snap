import React from 'react';
import Header from '../Header';
import { Outlet, Routes, Route } from 'react-router-dom';
// eslint-disable-next-line
const SetupForm = ({ parent }) => {
  return (
    <form className="container p-0 bg-light rounded text-dark">
      <Header headerText={'Game setup'} />
      <Routes>
        {/* eslint-disable-next-line */}
        {parent.children.map((child, index) => (
          <Route
            path={child.path}
            key={index}
            element={
              <child.Element label={child.elementProps.label} {...child} />
            }
          />
        ))}
      </Routes>
      <Outlet />
    </form>
  );
};

export default SetupForm;
