import React from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';

import SignIn from '../SignIn';
import Index from '../Index';

import PrivateRoute from '../PrivateRoute';
import Dashboard from '../Dashboard';
import Settings from '../Settings';

import PublicRoute from '../../components/PublicRoute';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <PublicRoute path="/" element={<Index />} />
        <PublicRoute path="/login" element={<SignIn />} />
        <PrivateRoute path="/dashboard" element={<Dashboard />} />
        <PrivateRoute path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  )
};

export default AppRouter;
