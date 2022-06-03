import React from 'react'
import './sidebar.css';
import { Link, useHistory } from 'react-router-dom'
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

export default function AdminSidebar() {
  const history = useHistory();
  return (
    <div className="sidebar">
      <ul className="list" style={{ listStyle: "none" }}>
        <li>
          <a href="/" >
            Admin Dashboard
          </a>
        </li>
        <li>
          <a href="/addTest" >
            Add Mock Test
          </a>
        </li>
        <li>
          <a href="/addPaper" >
            Add Past Papers
          </a>
        </li>
        <li>
          <a href="/addMaterial" >
            Add Learning Materials
          </a>
        </li>
        <li>
          <a href="/profile" >
            Profile
          </a>
        </li>
        <li onClick={handleLogout}>
          <a href="" >
            Logout
          </a>
        </li>
      </ul>
    </div>
  );
}
