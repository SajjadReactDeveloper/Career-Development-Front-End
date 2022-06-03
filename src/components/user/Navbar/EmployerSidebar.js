import React from 'react'
import './sidebar.css';
import { Link } from 'react-router-dom'
import axios from 'axios';

const handleLogout = async() => {
        try {
            await axios.get('/user/logout');
            localStorage.removeItem('firstLogin');
            window.location.href = "/login"
        } catch (error) {
            window.location.href = "/";
        }
    }

export default function EmployerSidebar() {
  return (
    <div className="sidebar">
      <ul className="list" style={{ listStyle: "none" }}>
        <li>Employer Dashboard</li>
        <li>
          <a href="addJob">Add Jobs</a>
        </li>
        <li>
          <a href="/viewApplicants">View Applicants</a>
        </li>
        <li>
          <a href="/profile">Profile</a>
        </li>
        <li onClick={handleLogout}>Logout</li>
      </ul>
    </div>
  );
}
