import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import BudgetAllocated from './BudgetAllocated'
import Transactions from './Transactions';

const Budget = ({ sidebarWidth }) => {
  const divStyle = {
    fontFamily: "'IBM Plex Mono', monospace",
  };
  return (
    <div
    style={{
      marginLeft: `${sidebarWidth}`,
      width: `calc(100% - ${sidebarWidth})`,
    }}
    >
      <nav className="bg-blue-400 text-white w-full flex items-center justify-between px-5 py-3 left-0">
        <ul className="flex gap-10">
          <Link to="/budget/budget-allocated" className="text-xl font-bold text-blue-950" style={divStyle}>
            Budget Allocated
          </Link>
          <Link to="/budget/transactions" className="text-xl font-bold text-blue-950" style={divStyle}>
            Transactions
          </Link>
        </ul>
      </nav>
      <main className="p-0 pt-5">
        <Routes>
          <Route index element={<BudgetAllocated />} />
          <Route path="budget-allocated" element={<BudgetAllocated />} />
          <Route path="transactions" element={<Transactions />} />
        </Routes>
      </main>
    </div>
  )
}

export default Budget