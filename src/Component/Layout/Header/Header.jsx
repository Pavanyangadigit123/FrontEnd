import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"



const Header = () => {
 

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

                   {/* Settings Dropdown */}
                   <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="settingsDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fas fa-cog"></i> <h6>Settings</h6>
                </a>
                <ul className="dropdown-menu" aria-labelledby="settingsDropdown">
                  <li>
                    <Link className="dropdown-item" to="/profile">
                      <i className="fas fa-user"></i> View Profile
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/signout">
                      <i className="fas fa-sign-out-alt"></i> Sign Out
                    </Link>
                  </li>
                </ul>
              </li>
              {/* Notification Icon */}
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/notifications">
                  <i className="fas fa-bell"></i> <h6>Notifications</h6>
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