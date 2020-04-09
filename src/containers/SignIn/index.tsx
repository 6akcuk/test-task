import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import SignInForm, { SignInFormValues } from '../../components/SignInForm';

import { selectSignedIn, selectSigningIn } from '../../store/auth/selectors';
import { signIn } from '../../store/auth/actions';

const SignIn: React.FC = () => {
  const signingIn = useSelector(selectSigningIn);
  const signedIn = useSelector(selectSignedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (signedIn) {
      navigate('/dashboard');
    }
  }, [navigate, signedIn]);

  const handleSubmit = (values: SignInFormValues) => {
    dispatch(signIn(values.login, values.password));
  };

  return (
    <SignInForm
      processing={signingIn}
      onFinish={(data) => handleSubmit(data as SignInFormValues)}
    />
  )
};

export default SignIn;
