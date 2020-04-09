import React, { useEffect } from 'react';
import { Route, RouteProps, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import AppLayout from '../AppLayout';

import { selectSignedIn } from '../../store/auth/selectors';

interface Props extends RouteProps {}

const PrivateRoute: React.FC<Props> = ({ element, ...other }) => {
  const signedIn = useSelector(selectSignedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (!signedIn) {
      navigate('/login');
    }
  }, [signedIn, navigate]);

  return (
    <Route
      {...other}
      element={
        <AppLayout>
          {element}
        </AppLayout>
      }
    />
  )
};

export default PrivateRoute;
