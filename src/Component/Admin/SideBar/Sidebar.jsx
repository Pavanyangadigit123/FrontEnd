import React from "react";
import {
  BsCart3,
  BsGrid1X2Fill,
  BsTrashFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill,
  BsPersonPlusFill,
  BsFillBellFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import "../SideBar/Sidebar.css";
import { useAuth } from "../../../context/auth";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  const [auth] = useAuth();

  const handleLogout = () => {
    localStorage.removeItem("token");
    updateAuth({
      username: null,
      token: null,
      userId: null,
      role: null,
    });

    navigate("/"); // Redirect immediately after logout
  };

  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          {/* Replace with your LabourHub logo from the public folder */}
          <img src="/logo2.jpg" alt="LabourHub Logo" className="logo" />
          <span className="title">LabourHub</span>
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <Link to="">
            <BsGrid1X2Fill className="icon" /> Profile
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="users">
            <BsPeopleFill className="icon" /> Users
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="labours">
            <BsPeopleFill className="icon" /> Labours
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/signupUser">
            <BsPersonPlusFill className="icon" /> Add users
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/signuplabour">
            <BsPersonPlusFill className="icon" /> Add Labours
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="skills">
            <BsPersonPlusFill className="icon" /> Add Skills
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="deleteSkills">
            <BsTrashFill className="icon" /> Delete Skills
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="addNotification">
            <BsFillBellFill className="icon" /> Notification
          </Link>
        </li>

        {auth?.token && (
          <li className="sidebar-list-item">
            <Link onClick={handleLogout}>
              <BsFillGearFill className="icon" /> Sign Out
            </Link>
          </li>
        )}

        {/* {auth?.token && ( <li className='sidebar-list-item'>
                    <Link className="dropdown-item" onClick={handleLogout}>
                      <i className="fas fa-sign-out-alt"></i> Sign Out
                    </Link>
                  </li>)} */}
      </ul>
    </aside>
  );
}

export default Sidebar;
