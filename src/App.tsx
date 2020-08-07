import React from 'react';

import { AuthProvider } from './contexts/AuthContext';

import SignIn from './pages/SignIn';
import GlobalStyle from './styles/global';

import ToastContainer from './components/ToastContainer';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>

    <ToastContainer />

    <GlobalStyle />
  </>
);

export default App;
