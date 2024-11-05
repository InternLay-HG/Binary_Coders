import React from 'react'
import { Link,Route,Routes, Navigate, Outlet,  } from 'react-router-dom'
import Calender from './Calender'
import Allevents from "./Allevents";
const Events = () => {
  return (
    <div>
    <div className='fixed inline-block  align-middle  w-full  bg-neutral-400 ' >
      <ul className=" flex font-medium ">
        <li>
          <Link
            className="flex items-center  text-white rounded-lg "
            to="calender"
          >
            <span className=" ms-3 whitespace-nowrap">Calender</span>
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center text-white rounded-lg "
            to="allevents"
          >
            <span className=" ms-3 whitespace-nowrap">AllEvents</span>
          </Link>
        </li>
        
      </ul>
    </div>
    <div className='absolute  mt-8 ml-3'>
      {/* Nested route*/}
      <Routes>
      <Route path="/" element= {<Navigate replace to="calender"/>}/>
               <Route path="calender" element={<Calender />} />
        <Route path="allevents" element={<Allevents />} />
      </Routes>

      {/* Outlet for rendering nested components if needed */}
      <Outlet />
    </div>
  </div>
  )
}

export default Events