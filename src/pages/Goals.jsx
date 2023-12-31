import React from 'react'
import './goals.scss'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Singlegoal from '../components/Singlegoal'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'




const Goals = () => {

 

  // console.log(query?.data);

  document.title = 'goals'
  return (
    <div className='goals'>
        <Sidebar/>
        <div className="home-container">
            <Navbar/>
            <div className="goal-container">
              <Singlegoal />
            </div>
        </div>
    </div>
  )
}

export default Goals