import React from 'react';
import { Outlet, Routes, Route } from 'react-router-dom';
import SetupForm from './Form';
// eslint-disable-next-line
const Setup = ({ parent }) => {
  // eslint-disable-next-line
  console.log(parent);
  return (
    <section className="py-5">
      <div className="row">
        <div className="col-12 col-lg-6 offset-lg-3 d-flex align-items-center">
          <SetupForm />
          <Routes>
            {/* eslint-disable-next-line */}
            {parent.children.map((child, index) => (
              <Route
                path={child.path}
                key={index}
                element={<child.Element {...child} />}
              />
            ))}
          </Routes>
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Setup;
