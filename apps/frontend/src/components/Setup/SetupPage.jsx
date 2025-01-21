import SetupForm from './Form';
import proptypes from '@/proptypes';
import { FormHeader } from './Header';

const SetupPage = () => {
  return (
    <section className="py-5">
      <div className="row">
        <div className="col-12 col-lg-6 offset-lg-3 d-flex align-items-center">
          <FormHeader text={'Game setup'} id={'form-header'} />
          <SetupForm />
        </div>
      </div>
    </section>
  );
};

SetupPage.propTypes = proptypes.App.SetupPage;

export default SetupPage;
