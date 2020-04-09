import React from 'react';

import ReduxProvider from './containers/ReduxProvider';
import AppRouter from './containers/AppRouter';
import ErrorProvider from './containers/ErrorProvider';

function App() {
  return (
    <ReduxProvider>
      <ErrorProvider>
        <AppRouter />
      </ErrorProvider>
    </ReduxProvider>
  );
}

export default App;
