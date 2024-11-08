import React from 'react'
import { Link, Navigate, Outlet, Route, Routes } from 'react-router-dom'
import BasicInfo from './BasicInfo'
import Injuries from './Injuries'
import Wearables from './Wearables'
const Health = () => {
	return (
		<div>
			<div className='fixed inline-block    align-middle    w-full    bg-zinc-300 '>
				<ul className=' flex font-medium '>
					<li>
						<Link className='flex items-center    text-gray-900 rounded-lg ' to='info'>
							<span className=' ms-3 whitespace-nowrap'>BasicInfo</span>
						</Link>
					</li>
					<li>
						<Link className='flex items-center text-gray-900 rounded-lg ' to='wearable'>
							<span className=' ms-3 whitespace-nowrap'>Wearable</span>
						</Link>
					</li>
					<li>
						<Link className='flex items-center text-gray-900 rounded-lg ' to='injures'>
							<span className=' ms-3 whitespace-nowrap'>Injuries</span>
						</Link>
					</li>
				</ul>
			</div>
			<div className='absolute    mt-8 ml-3'>
				{/* Nested route*/}
				<Routes>
					<Route path='/' element={<Navigate replace to='info' />} />
					<Route path='info' element={<BasicInfo />} />
					<Route path='wearable' element={<Wearables />} />
					<Route path='injures' element={<Injuries />} />
				</Routes>

				{/* Outlet for rendering nested components if needed */}
				<Outlet />
			</div>
		</div>
	)
}

export default Health
