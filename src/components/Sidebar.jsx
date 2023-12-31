import React from 'react'
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="top">
            <span className="logo">
                The Mentor
            </span>
        </div>
        <hr/>
        <div className="center">
            <ul>
                <li>
                    <Link className='link' to="/">
                        <DashboardIcon className='icon' />
                        <span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link className='link' to="/task">
                        <DashboardIcon className='icon' />
                        <span>Add Task</span>
                    </Link>
                </li>
                <li>
                <Link className='link' to="/goals">
                        <DashboardIcon className='icon' />
                        <span>Goals</span>
                    </Link>
                </li>
                <li>
                    <DashboardIcon className='icon'/>
                    <span>Dashboard</span>
                </li>
                <li>
                    <DashboardIcon className='icon'/>
                    <span>Dashboard</span>
                </li>
               
            </ul>
        </div>
        <div className="bottom"></div>
    </div>
  )
}

export default Sidebar