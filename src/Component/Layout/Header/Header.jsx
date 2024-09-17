import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
import { useKeycloak } from '@react-keycloak/web';


const Header = () => {
  const { keycloak, initialized } = useKeycloak();
 
    const socailMediaSingup = (keycloakData, onSuccess) => {
      console.log(keycloakData.tokenParsed.email);
  
      setTimeout(() => {
        onSuccess && onSuccess(res);
      }, 2000);
    }
    useEffect(() => {
      if (keycloak.authenticated) {
        console.log("keycloak.authenticated", keycloak.authenticated);
        socailMediaSingup(keycloak, (res) => {
          if (res.data.status === 200) {
            if (res.data.result.isDetailsAvailable) {
            //   // If details are available take the user to dashborad page
            //   if (nonLoggedInUserData && nonLoggedInUserData.redirectUrl) {
            //     history.push(nonLoggedInUserData.redirectUrl);
            //   } else {
            //     history.push("/homebuyer/explore");
            //   }
            } else {
              //If details are not available take the user to home buyer details page
              //history.push("/homebuyerdetails");
            }
          }
        });
      }
    }, [keycloak.authenticated]);

    return (
        <>
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        {/* Left side links */}
        <div className="navbar-left">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                <i className="fas fa-home"></i> <h6>Home</h6>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/about">
                <i className="fas fa-info-circle"></i> <h6>About</h6>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/contact">
                <i className="fas fa-phone"></i> <h6>Contact</h6>
              </Link>
            </li>
          </ul>
        </div>

        {/* Centered brand with image */}
        <div className="navbar-center mx-auto">
  <Link className="navbar-brand" to="/" style={{ display: 'flex', alignItems: 'center' }}>
    <img src="/logo2.jpg" alt="Labour Hub Logo" className="landmarket-logo" />
    <span className="labourhub-text">LabourHub</span>
  </Link>
</div>

        {/* Right side links, moved closer to the LandMarket image */}
        <div className="navbar-right" style={{ marginLeft: '10px' }}>
          <ul className="navbar-nav">
            {/* <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/signup">
                <i className="fas fa-user-plus"></i> <h6>Signup</h6>
              </Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/signin">
                <i className="fas fa-sign-in-alt"></i> <h6>SignIn</h6>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/findLabours">
              <i className="fas fa-search"></i> <h6>Search For Labours</h6>
              </Link>
            </li>
             
          
          </ul>
        </div>
      </div>
    </nav>
  






        </>
    )
}

export default Header