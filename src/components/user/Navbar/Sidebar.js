import React from 'react'
import './sidebar.css';
import { Link } from 'react-router-dom';
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

export default function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="list" style={{ listStyle: "none" }}>
        <li>User Dashboard</li>
        <li>
          <a href="/viewTest">Mock Test</a>
        </li>
        <li>
          <a href="/viewPaper">Past Papers</a>
        </li>
        <li>
          <a href="/viewMaterial">Learning Materials</a>
        </li>
        <li>
          <a href="/discussion">Discussion Form</a>
        </li>
        <li>
          <a href="/viewDiscussion">View Discussion</a>
        </li>
        <li>
          <a href="/viewJobs">Job Listing</a>
        </li>
          <li>
            <a href="/profile">Profile</a>
          </li>
        <li onClick={handleLogout}>Logout</li>
      </ul>
    </div>
  );
}
