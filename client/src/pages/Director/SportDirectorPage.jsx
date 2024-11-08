// src/pages/SportDirectorPage.js
import React, { useEffect } from 'react'
import { Link, Navigate, Outlet, Route, Routes } from 'react-router-dom'
import DirectorBudgets from './DirectorBudgets'
import DirectorEvents from './DirectorEvents'
import DirectorGames from './DirectorGames'
import DirectorUpdates from './DirectorUpdates'
const SportDirectorPage = () => {
	useEffect(() => {
		const userMenuButton = document.querySelector('[data-dropdown-toggle="dropdown-user"]')
		const userDropdown = document.getElementById('dropdown-user')
		const sidebarToggle = document.querySelector('[data-drawer-toggle="logo-sidebar"]')
		const sidebar = document.getElementById('logo-sidebar')

		// User dropdown toggle
		const handleUserMenuToggle = () => {
			userDropdown?.classList.toggle('hidden')
		}

		// Sidebar toggle
		const handleSidebarToggle = () => {
			sidebar?.classList.toggle('-translate-x-full')
		}
		userMenuButton?.addEventListener('click', handleUserMenuToggle)
		sidebarToggle?.addEventListener('click', handleSidebarToggle)

		// Cleanup on component unmount
		return () => {
			userMenuButton?.removeEventListener('click', handleUserMenuToggle)
			sidebarToggle?.removeEventListener('click', handleSidebarToggle)
		}
	}, [])
	return (
		<div className='static'>
			<nav className='fixed top-0 z-50 w-full bg-white border-b border-gray-200 '>
				<div className='px-3 py-3 lg:px-5 lg:pl-3'>
					<div className='flex items-center justify-between'>
						<div className='flex items-center justify-start rtl:justify-end'>
							<button
								data-drawer-target='logo-sidebar'
								data-drawer-toggle='logo-sidebar'
								aria-controls='logo-sidebar'
								type='button'
								className='inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 '
							>
								<span className='sr-only'>Open sidebar</span>
								<svg
									className='w-6 h-6'
									aria-hidden='true'
									fill='currentColor'
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										clipRule='evenodd'
										fillRule='evenodd'
										d='M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z'
									></path>
								</svg>
							</button>
							<a href='/' className='flex ms-2 md:me-24'>
								<span className='self-center text-xl font-semibold sm:text-2xl whitespace-nowrap '>
									Logo
								</span>
							</a>
						</div>
						<div className='flex items-center'>
							<div className=' flex items-center ms-3'>
								<div className='z-10'>
									<button
										type='button'
										className='flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 '
										aria-expanded='false'
										data-dropdown-toggle='dropdown-user'
									>
										<span className='sr-only'>Open user menu</span>
										<img
											className='w-8 h-8 rounded-full'
											src='https://cdn.pixabay.com/photo/2021/07/02/04/48/user-6380868_1280.png'
											alt='user photo'
										/>
									</button>
								</div>
								<div
									className='z-50 right-0 top-14 absolute hidden    text-base list-none bg-white divide-y divide-gray-100 rounded shadow '
									id='dropdown-user'
								>
									<div className='px-4 py-3' role='none'>
										<p className='text-sm text-gray-900 ' role='none'>
											Neil Sims
										</p>
										<p className='text-sm font-medium text-gray-900 truncate ' role='none'>
											neil.sims@flowbite.com
										</p>
									</div>
									<ul className='py-1' role='none'>
										<li>Sign out</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</nav>

			<aside
				id='logo-sidebar'
				className='fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0'
				aria-label='Sidebar'
			>
				<div className='h-full px-3 pb-4 overflow-y-auto bg-white '>
					<ul className='space-y-2 font-medium'>
						<li>
							<Link className='flex items-center p-2 text-gray-900 rounded-lg ' to='events'>
								<span className='flex-1 ms-3 whitespace-nowrap'>Events</span>
							</Link>
						</li>
						<li>
							<Link
								className='className="flex items-center p-2 text-gray-900 rounded-lg "'
								to='games'
							>
								<span className='flex-1 ms-3 whitespace-nowrap'>Games</span>
							</Link>
						</li>
						<li>
							<Link
								className='className="flex items-center p-2 text-gray-900 rounded-lg "'
								to='budgets'
							>
								<span className='flex-1 ms-3 whitespace-nowrap'>Budgets</span>
							</Link>
						</li>
						<li>
							<Link
								className='className="flex items-center p-2 text-gray-900 rounded-lg "'
								to='updates'
							>
								<span className='flex-1 ms-3 whitespace-nowrap'>Updates</span>
							</Link>
						</li>
					</ul>
				</div>
			</aside>
			<div className='mt-16    sm:ml-64 sm:mt-14'>
				{/* Nested route*/}
				<Routes>
					<Route path='/' element={<Navigate replace to='events' />} />
					<Route path='events/*' element={<DirectorEvents />} />
					<Route path='games' element={<DirectorGames />} />
					<Route path='budgets/*' element={<DirectorBudgets />} />
					<Route path='updates' element={<DirectorUpdates />} />
				</Routes>
				<Outlet />
			</div>
		</div>
	)
}

export default SportDirectorPage
