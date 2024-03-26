import React from 'react';
import SetupForm from './Form';
import { Outlet } from 'react-router-dom';

const Setup = () => {
  return (
    <section className="py-5">
      <div className="row">
        <div className="col-12 col-lg-6 offset-lg-3 d-flex align-items-center">
          <SetupForm />
        </div>
      </div>
      <Outlet />
    </section>
  );
};

export default Setup;
