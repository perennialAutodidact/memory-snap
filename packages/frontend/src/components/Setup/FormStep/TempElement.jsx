import { useNavigate } from 'react-router-dom';
import useFormContext from 'hooks/useFormContext';
import useGameContext from 'hooks/useGameContext';

//form index
const TempElement = () => {
  const navigate = useNavigate();

  const {
    state: { currentStep },
  } = useFormContext();

  const {
    state: { stage },
  } = useGameContext();

  navigate(`/setup/step-${currentStep}`);
};

export default TempElement;
