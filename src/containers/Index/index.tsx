import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { selectSignedIn } from '../../store/auth/selectors';

const Index: React.FC = () => {
  const signedIn = useSelector(selectSignedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (signedIn) {
      navigate('/dashboard');
    } else {
      navigate('/login');
    }
  }, [navigate, signedIn]);

  return null;
};

export default Index;
