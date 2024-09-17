import Home from './Component/Home'
import About from './Component/About/About'
import Contact from './Component/Contact/Contact'
import {Routes,Route} from 'react-router-dom';
import SignupUser from './Component/Registration/SignupUser/SignupUser'
import Signin from './Component/Registration/Signin/Signin';
import SignupLabour from './Component/Registration/SignupLabour/SignupLabour';
import FindLabours from './Component/FindLabour/FindLabours';
import LabourProfile from './Component/LabourProfile';
import '../src/Component/HomePage.css'
import RegistrationOptions from './Component/Registration/RegistrationOptions';

import keycloak from './keycloak';
import {ReactKeycloakProvider } from '@react-keycloak/web';
import { useEffect } from 'react';

import PrivateRoute from '../src/Routes/PrivateRoutes';


function App() {
  useEffect(() => {
    if (window.opener) {
      // send them to the opening window
      window.focus();
      window.opener.location.href = "/";
      window.close();
    }
  }, []);
 

  return (
    <>
      <ReactKeycloakProvider authClient={keycloak}>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/signupUser" element={<SignupUser />} />
        <Route path="/signupLabour" element={<SignupLabour/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/findLabours" element={<FindLabours/>} />
        <Route path="/profile" element={<LabourProfile />} />
        <Route path="/register-options" element={<RegistrationOptions />} />
        <Route path="/about" element={<PrivateRoute />}>
        </Route>
      </Routes>
      </ReactKeycloakProvider>

    </>
  )
}

export default App