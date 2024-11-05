import React from 'react'
import { Link,Route,Routes, Navigate, Outlet,  } from 'react-router-dom'
import Dashboard from './Dashboard'
import Fund from './Fund'

const Budgets = () => {
  return (
    <div>
    <div className='fixed inline-block  align-middle  w-full  bg-zinc-300 ' >
      <ul className=" flex font-medium ">
        <li>
          <Link
            className="flex items-center  text-gray-900 rounded-lg "
            to="dashboard"
          >
            <span className=" ms-3 whitespace-nowrap">Dashboard</span>
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center text-gray-900 rounded-lg "
            to="fund"
          >
            <span className=" ms-3 whitespace-nowrap">Funds</span>
          </Link>
        </li>
        
      </ul>
    </div>
    <div className='absolute  mt-8 ml-3'>
      {/* Nested route*/}
      <Routes>
      <Route path="/" element= {<Navigate replace to="dashbord"/>}/>
       <Route path="dashbord" element={<Dashboard/>} />
        <Route path="fund" element={<Fund/>} />
      </Routes>

      {/* Outlet for rendering nested components if needed */}
      <Outlet />
    </div>
  </div>
  )
}

export default Budgets