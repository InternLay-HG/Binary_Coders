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
		<div className='bg-gray-500 min-h-screen'>
			<div style={{background:'#446C7B'}} className='fixed h-10 inline-block align-middle w-full '>
				<ul className='flex font-medium'>
					<li>
						<Link className='px-8 flex items-center text-white rounded-lg' to='pending'>
							<span className='ms-3 whitespace-nowrap'>Pending</span>
						</Link>
					</li>
					<li>
						<Link className='px-8 flex items-center text-white rounded-lg' to='approved'>
							<span className='ms-3 whitespace-nowrap'>Approved</span>
						</Link>
					</li>
					<li>
						<Link className='px-8 flex items-center text-white rounded-lg' to='rejected'>
							<span className='ms-3 whitespace-nowrap'>Rejected</span>
						</Link>
					</li>
				</ul>
			</div>
			<div className=' mt-10 ml-3'>
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
		<div className="p-4">
			<table className="mt-10 min-w-full rounded-lg bg-white ">
				<thead>
					<tr>
						<th className="py-2 px-4 border-b bg-gray-400 text-left font-semibold ">Coach</th>
						<th className="py-2 px-4 border-b bg-gray-400 text-left font-semibold ">Fund</th>
						<th className="py-2 px-4 border-b bg-gray-400 text-left font-semibold">Description</th>
					</tr>
				</thead>
				<tbody>
					{budgets?.map((budget, index) => (
						<tr key={index} className="hover:bg-gray-100">
							<td className="py-2 px-4 border-b border-gray-300 text-gray-700">{budget.coach}</td>
							<td className="py-2 px-4 border-b border-gray-300 text-gray-700">{budget.fund}</td>
							<td className="py-2 px-4 border-b border-gray-300 text-gray-700">{budget.description}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default Budgets
