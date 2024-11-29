import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFormContext } from "@/hooks/useFormContext";

const IndexElement = () => {
  const navigate = useNavigate();

  const {
    state: { currentStep },
  } = useFormContext();

  useEffect(() => {
    navigate(`/setup/step-${currentStep}`);
  }, [currentStep, navigate]);
};

export default IndexElement;
