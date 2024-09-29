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
import Notification from './Component/NotificationTable/Notification';



import PrivateRoute from '../src/Routes/PrivateRoutes';
import Order from './Component/Order/Order';
import ProfilePictureUpload from './ProfilePictureUpload';
import BookingPage from './Component/BookingPage/BookingPage';
import PaymentPage from './Component/PaymentPage/PaymentPage';
import Sidebar from "../src/Component/Admin/SideBar/Sidebar";
import Users from "../src/Component/Admin/Users/Users";
import Labours from "../src/Component/Admin/Labours/Labours";
import AddSkill from "../src/Component/Admin/AddSkill/AddSkill";
import DeleteSkills from './Component/Admin/DeleteSkill/DeleteSkills';
import AdminPrivateRoute from './Routes/AdminPrivateRoute';
import Unauthorized from './Component/Admin/Unauthorized';
import AdminProfile from './Component/Admin/AdminProfile/AdminProfile';
import AddNotification from './Component/Admin/Notification/AddNotification';
import UserProfile from './Component/UserProfile/UserProfile';
import LabourBooking from './Component/LabourBooking/LabourBooking';
import ForgotPassword from './Component/Registration/Signin/ForgotPassword';



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
        <Route path="/notifications" element={<Notification />} />
        <Route path="/userProfile" element={<UserProfile />} />
        {/* <Route path="/myBookings" element={<LabourBooking />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/forgotPassword" element={<ForgotPassword/>} />

       
        <Route path="/myBookings" element={<PrivateRoute><LabourBooking/></PrivateRoute>}/>
        {/* <Route path="/notifications" element={<PrivateRoute><Notification/></PrivateRoute>}/> */}

        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="/sidebar" element={<Sidebar />} />

        <Route path="admin" element={<AdminPrivateRoute />}>
        <Route index element ={<AdminProfile />} />
        <Route path="users" element={<Users/>} />
        <Route path="labours" element={<Labours/>} />
        <Route path="skills" element={<AddSkill/>} />
        <Route path="deleteSkills" element={<DeleteSkills/>} />
        <Route path="addNotification" element={<AddNotification/>} />
       
       

        </Route>
        {/* </Route> */}
      </Routes>
    

    </>
  )
}

export default App