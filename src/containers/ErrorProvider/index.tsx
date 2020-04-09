import React, { createContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { notification } from 'antd';

import { selectError, selectHasError } from '../../store/error/selectors';
import { clearError } from '../../store/error/actions';

interface Context {
  hasError: boolean
}

const ErrorContext = createContext<Context>({
  hasError: false,
});

const ErrorProvider: React.FC = ({ children }) => {
  const hasError = useSelector(selectHasError);
  const errorMessage = useSelector(selectError);
  const dispatch = useDispatch();

  // Notify users on error
  useEffect(() => {
    if (hasError) {
      notification.error({
        message: 'Error',
        description: errorMessage,
      });

      dispatch(clearError());
    }
  }, [hasError, errorMessage, dispatch]);

  return (
    <ErrorContext.Provider value={{
      hasError,
    }}>
      {children}
    </ErrorContext.Provider>
  )
};

export default ErrorProvider;
