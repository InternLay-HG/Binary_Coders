import React, { useEffect, useState } from 'react'
import { Link, Navigate, Outlet, Route, Routes } from 'react-router-dom'
import apiurl from '../../../config'

const Budgets = () => {
	const [budgets, setBudgets] = useState([])
	const sortByDate = (a, b) => new Date(b.date) - new Date(a.date)

	const fetchBudgets = async () => {
		const response = await fetch(`${apiurl}/getBudgets`)
		const data = await response.json()

		setBudgets({
			pending: data.filter((i) => i.status === 'pending').sort(sortByDate),
			approved: data.filter((i) => i.status === 'approved').sort(sortByDate),
			rejected: data.filter((i) => i.status === 'rejected').sort(sortByDate),
		})
	}

	useEffect(() => {
		fetchBudgets()
	}, [])

	return (
		<div>
			<div className='fixed inline-block  align-middle  w-full  bg-zinc-300 '>
				<ul className=' flex font-medium '>
					<li>
						<Link className='flex items-center  text-gray-900 rounded-lg ' to='pending'>
							<span className=' ms-3 whitespace-nowrap'>Pending</span>
						</Link>
					</li>
					<li>
						<Link className='flex items-center text-gray-900 rounded-lg ' to='approved'>
							<span className=' ms-3 whitespace-nowrap'>Approved</span>
						</Link>
					</li>
					<li>
						<Link className='flex items-center text-gray-900 rounded-lg ' to='rejected'>
							<span className=' ms-3 whitespace-nowrap'>Rejected</span>
						</Link>
					</li>
				</ul>
			</div>
			<div className='absolute  mt-8 ml-3'>
				<Routes>
					<Route path='/' element={<Navigate replace to='pending' />} />
					<Route path='pending' element={<Budget budgets={budgets?.pending} />} />
					<Route path='approved' element={<Budget budgets={budgets?.approved} />} />
					<Route path='rejected' element={<Budget budgets={budgets?.rejected} />} />
				</Routes>

				<Outlet />
			</div>
		</div>
	)
}

const Budget = ({ budgets }) => {
	return (
		<>
			{budgets?.map((i, j) => (
				<div key={j}>
					{i.fund}, {i.coach}, {i.description}
				</div>
			))}
		</>
	)
}

export default Budgets
