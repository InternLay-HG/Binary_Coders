import React from 'react'
import { Link, Navigate, Outlet, Route, Routes } from 'react-router-dom'
import Awards from './Awards'
import Dashbord from './Dashbord'

const Performance = () => {
	return (
		<div>
			<div className='fixed inline-block    align-middle    w-full    bg-zinc-300 '>
				<ul className=' flex font-medium '>
					<li>
						<Link className='flex items-center    text-gray-900 rounded-lg ' to='dashboard'>
							<span className=' ms-3 whitespace-nowrap'>Dashboard</span>
						</Link>
					</li>
					<li>
						<Link className='flex items-center text-gray-900 rounded-lg ' to='awards'>
							<span className=' ms-3 whitespace-nowrap'>Awards</span>
						</Link>
					</li>
				</ul>
			</div>
			<div className='absolute    mt-8 ml-3'>
				{/* Nested route*/}
				<Routes>
					<Route path='/' element={<Navigate replace to='dashbord' />} />
					<Route path='dashboard' element={<Dashbord />} />
					<Route path='awards' element={<Awards />} />
				</Routes>

				{/* Outlet for rendering nested components if needed */}
				<Outlet />
			</div>
		</div>
	)
}

export default Performance
