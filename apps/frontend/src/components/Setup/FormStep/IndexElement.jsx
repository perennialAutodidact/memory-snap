import { useParams, useNavigate } from 'react-router-dom';
import { useFormContext } from '@/hooks/useFormContext';

const IndexElement = () => {
  const navigate = useNavigate();
  const params = useParams();

  const {
    formState: { step },
  } = useFormContext();
};

export default IndexElement;
