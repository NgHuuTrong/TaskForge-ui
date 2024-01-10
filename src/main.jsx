import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import store from './store.js';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './ui/ErrorFallback.jsx';
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <GoogleOAuthProvider
      clientId='219070252286-p7no8o8edv944ne2efkfm3gopqnph3h8.apps.googleusercontent.com'
    >
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => window.location.replace('/')}>
        <App />
      </ErrorBoundary>
    </GoogleOAuthProvider>
  </Provider>,
);
