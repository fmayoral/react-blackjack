import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import './axiosSetup';
import keycloak from './keycloak';
import { ReactKeycloakProvider } from '@react-keycloak/web';

ReactDOM.render(
  <ReactKeycloakProvider
    authClient={keycloak}
    initOptions={{
      onLoad: 'login-required',
      pkceMethod: 'S256',
    }}
  >
    <App />
  </ReactKeycloakProvider>,
  document.getElementById('root')
);