import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/auth.jsx';
import { GoogleOAuthProvider } from '@react-oauth/google'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
   <React.StrictMode>
  <BrowserRouter>
  <AuthProvider>
  <GoogleOAuthProvider clientId="529061361842-2ihaop64m6ajmerlbraviu2o3o36qkm7.apps.googleusercontent.com">
    <App />
    </GoogleOAuthProvider>
    </AuthProvider>
  </BrowserRouter>
   </React.StrictMode>

  </>
)