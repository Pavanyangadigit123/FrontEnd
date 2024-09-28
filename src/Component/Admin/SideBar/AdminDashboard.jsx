import React, { useState } from 'react';
import '../SideBar/Sidebar.css';
import Sidebar from '../SideBar/Sidebar';
import { Outlet } from 'react-router-dom';

const AdminDashboard = () => {

    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle)
    }

    return (
        <div className="grid-container ">
            <Sidebar openSideBarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
            <div className="container">
                <Outlet/>
            </div>
        </div>
    )
}

export default AdminDashboard