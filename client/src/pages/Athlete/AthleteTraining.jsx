import React from 'react'
import { Link, Navigate, Outlet, Route, Routes } from 'react-router-dom'
import Allevents from './Allevents'
import Calender from './Calender'
const Training = () => {
	return (
		<div>
			<div className='fixed inline-block    align-middle    w-full    bg-zinc-300 '>
				<ul className=' flex font-medium '>
					<li>
						<Link className='flex items-center    text-gray-900 rounded-lg ' to='calender'>
							<span className=' ms-3 whitespace-nowrap'>Calender</span>
						</Link>
					</li>
					<li>
						<Link className='flex items-center text-gray-900 rounded-lg ' to='allevents'>
							<span className=' ms-3 whitespace-nowrap'>AllEvents</span>
						</Link>
					</li>
				</ul>
			</div>
			<div className='absolute    mt-8 ml-3'>
				{/* Nested route*/}
				<Routes>
					<Route path='/' element={<Navigate replace to='calender' />} />
					<Route path='calender' element={<Calender />} />
					<Route path='allevents' element={<Allevents />} />
				</Routes>

				{/* Outlet for rendering nested components if needed */}
				<Outlet />
			</div>
		</div>
	)
}

export default Training
