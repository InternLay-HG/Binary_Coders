import React from 'react'
import AllNews from './AllNews'
import Notices from './Notices'
import { Navigate,Route,Routes,Outlet,Link } from 'react-router-dom'

const Updates = () => {
  return (
    <div>
      <div className='fixed inline-block  align-middle  w-full  bg-zinc-300 ' >
        <ul className=" flex font-medium ">
          <li>
            <Link
              className="flex items-center  text-gray-900 rounded-lg "
              to="allnews"
            >
              <span className=" ms-3 whitespace-nowrap">AllNews</span>
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center text-gray-900 rounded-lg "
              to="notices"
            >
              <span className=" ms-3 whitespace-nowrap">Notices</span>
            </Link>
          </li>
          
        </ul>
      </div>
      <div className='absolute  mt-8 ml-3'>
        {/* Nested route*/}
        <Routes>
        <Route path="/" element= {<Navigate replace to="allnews"/>}/>
        <Route path="allnews" element={<AllNews/>} />
        <Route path="notices" element={<Notices/>} />
        </Routes>

        {/* Outlet for rendering nested components if needed */}
        <Outlet />
      </div>
    </div>
   
  )
}

export default Updates