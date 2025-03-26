import React, { useEffect } from 'react';
import { useFormContext, useGameContext } from '@/hooks';
import {
  Outlet,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import proptypes from '@/proptypes';
import { GAME_STAGES } from '@/utils/stages';
import { getRouteByName, routes } from '@/utils';
import { FormHeader } from '../Header';

const { PLAYING } = GAME_STAGES;

const SetupForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const setupFormRoute = getRouteByName(routes, 'setup');
  const { formState } = useFormContext();
  const { gameDispatch, gameActions } = useGameContext();

  // redirect invalid form step paths to current form step
  useEffect(() => {
    const isSetupPath = location.pathname.startsWith('/setup');
    const formHasMoreSteps =
      formState.step.current < setupFormRoute.children.length;
    if (isSetupPath) {
      if (formHasMoreSteps) {
        navigate(`/setup/step-${formState.step.current}`);
      } else {
        gameDispatch(gameActions.updateStage(PLAYING));
      }
    }
  }, [formState.step]);

  return (
    <div className="container-fluid p-0 mx-2 bg-light rounded text-dark">
      <FormHeader text={'Game setup'} id={'form-header'} />
      <Routes>
        {setupFormRoute.children.map((child, index) => (
          <Route
            path={child.path}
            index={child.index}
            key={index}
            element={
              <child.Element
                label={child.elementProps.label}
                buttonText={child.elementProps.buttonText}
                buttonColorClass={child.elementProps.buttonColorClass}
                FormElement={child.elementProps.FormElement}
                id={child.elementProps.id}
                name={child.name}
                schema={child.schema}
                placeholder={child.elementProps.placeholder}
                {...child}
              />
            }
          />
        ))}
      </Routes>
      <Outlet />
    </div>
  );
};

SetupForm.propTypes = proptypes.Form.SetupForm;

export default SetupForm;
