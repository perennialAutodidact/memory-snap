import React from 'react';
import SetupForm from './Form';
// eslint-disable-next-line
const Setup = ({ parent }) => {
  return (
    <section className="py-5">
      <div className="row">
        <div className="col-12 col-lg-6 offset-lg-3 d-flex align-items-center">
          <SetupForm parent={parent} />
        </div>
      </div>
    </section>
  );
};

export default Setup;
