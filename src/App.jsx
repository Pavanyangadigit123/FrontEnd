import Home from './Component/Home'
import About from './Component/About/About'
import Contact from './Component/Contact/Contact'
import {Routes,Route} from 'react-router-dom';
import SignupUser from './Component/Registration/SignupUser/SignupUser'
import Signin from './Component/Registration/Signin/Signin';
import SignupLabour from './Component/Registration/SignupLabour/SignupLabour';
import FindLabours from './Component/FindLabour/FindLabours';
import LabourProfile from './Component/LabourProfile';


function App() {
 

  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signupUser" element={<SignupUser />} />
        <Route path="/signupLabour" element={<SignupLabour/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/findLabours" element={<FindLabours/>} />
        <Route path="/profile" element={<LabourProfile />} />
      </Routes>

    </>
  )
}

export default App