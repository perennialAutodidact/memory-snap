import SetupForm from './Form';
import proptypes from '@/proptypes';

const SetupPage = () => {
  return (
    <section className="container-fluid px-0 py-5">
      <div className="row g-0">
        <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3 d-flex align-items-center">
          <SetupForm />
        </div>
      </div>
    </section>
  );
};

SetupPage.propTypes = proptypes.App.SetupPage;

export default SetupPage;
