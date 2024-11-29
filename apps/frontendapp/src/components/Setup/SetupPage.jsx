import React from "react";
import SetupForm from "./Form/Form";
import proptypes from "@/proptypes";

const SetupPage = ({ route }) => {
  return (
    <section className="py-5">
      <div className="row">
        <div className="col-12 col-lg-6 offset-lg-3 d-flex align-items-center">
          <SetupForm route={route} />
        </div>
      </div>
    </section>
  );
};

SetupPage.propTypes = proptypes.App.SetupPage;

export default SetupPage;
