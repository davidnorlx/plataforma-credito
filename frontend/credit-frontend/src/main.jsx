import React from 'react'
import ReactDOM from 'react-dom/client'
import { AuthProvider } from 'react-oidc-context'

import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/styles.css'

import App from './App'
import { cognitoAuthConfig } from './auth/cognitoConfig'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider {...cognitoAuthConfig}>
      <App />
    </AuthProvider>
  </React.StrictMode>
)