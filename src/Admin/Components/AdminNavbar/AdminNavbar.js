import React, { useState, useEffect } from 'react';
import { Nav } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import './adminnavbar.css'; // Optional: for custom styling
import { FaShoppingCart } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { LuLogOut } from "react-icons/lu";
import { FaExchangeAlt } from "react-icons/fa";
import { MdManageHistory } from "react-icons/md";


const AdminNavBar = () => {
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    // Fetch user count from your backend API
    fetch('/api/userCount') // Replace with your API endpoint
      .then(response => response.json())
      .then(data => setUserCount(data.count))
      .catch(error => console.error('Error fetching user count:', error));
  }, []);

  return (
    <div className="d-flex">
      <Nav className="col-md-3 col-lg-2 d-md-block bg-secondary sidebar">
        <div className="sidebar-sticky">
          <Nav.Item className='mb-4 mt-4'>
            <Nav.Link href="/AdminPannel" className='text-dark bg-info'>
              Dashboard
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className='mb-2 bg-light'>
            <Nav.Link href="/changepassword">
            <FaExchangeAlt/> Change Password
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className='mb-2 bg-light'>
            <Nav.Link href="/WatchUsers">
              <FaUser /> Users <span className="badge bg-success">{userCount}</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className='mb-2 bg-light'>
            <Nav.Link href="/Additems">
            <FaShoppingCart /> Add Items
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className='mb-2 bg-light'>
            <Nav.Link href="/ManageOrders">
            <CiSettings /> Manage Orders
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className='mb-2 bg-light'>
            <Nav.Link href='/ManageItems'>
             <MdManageHistory/> Manage Items
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className='mb-2 bg-light'>
            <Nav.Link href="/Logout">
            <LuLogOut/> Logout
            </Nav.Link>
          </Nav.Item>
        </div>
      </Nav>
      <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
        {/* Main content goes here */}
      </main>
    </div>
  );
};

export default AdminNavBar;
