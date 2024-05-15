import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useFormContext from 'hooks/useFormContext';
//form index
const TempElement = () => {
  const navigate = useNavigate();

  const {
    state: { currentStep },
  } = useFormContext();

  useEffect(() => {
    navigate(`/setup/step-${currentStep}`);
    //eslint-disable-next-line
  }, [currentStep]);
};

export default TempElement;
