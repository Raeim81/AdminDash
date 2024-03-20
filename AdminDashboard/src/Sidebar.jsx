import React from 'react'
import 
{BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'

 import { FaHome } from 'react-icons/fa';
 import { FaChartBar } from 'react-icons/fa';
 import AuthButton from './AuthButton'; // Adjust the import path if necessary

function Sidebar({openSidebarToggle}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
            DASHBOARD
            </div>
            
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="">
                <FaHome className='icon'/> Home
                </a>
            </li>
           
            <li className='sidebar-list-item'>
                <a href="">
                <FaChartBar className='icon'/> Analyze
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsMenuButtonWideFill className='icon'/> Reports
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGearFill className='icon'/> Settings
                </a>
            </li>

            <li className='sidebar-button-item'>
                <AuthButton />
            </li>

            
        </ul>
    </aside>
  )
}

export default Sidebar