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
import FAQ from './Component/FAQ';




import PrivateRoute from '../src/Routes/PrivateRoutes';
import Order from './Component/Order/Order';
import ProfilePictureUpload from './ProfilePictureUpload';
import BookingPage from './Component/BookingPage/BookingPage';
import PaymentPage from './Component/PaymentPage/PaymentPage';



function App() {
 

  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/signupUser" element={<SignupUser />} />
        <Route path="/signupLabour" element={<SignupLabour/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/findLabours" element={<FindLabours/>} />
        <Route path="/profile" element={<LabourProfile />} />
        <Route path="/faq" element={<FAQ/>} />
        <Route path="/register-options" element={<RegistrationOptions />} />
        <Route path="/profile-picture" element={<ProfilePictureUpload />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/about" element={<PrivateRoute><About/></PrivateRoute>}/>
        {/* </Route> */}
      </Routes>
    

    </>
  )
}

export default App