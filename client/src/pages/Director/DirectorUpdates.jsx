import { useEffect, useState } from 'react'

const Updates = () => {
  const [updates, setUpdates] = useState([])

  const fetchUpdates = async () => {
    const response = await fetch('http://localhost:5000/director/getUpdates')
    setUpdates([...(await response.json())])
  }

  useEffect(() => {
    fetchUpdates()
  }, [])

  const addUpdate = async (e) => {
    e.preventDefault()
    const newUpdate = e.target.elements.newUpdate.value

    const res = await fetch('http://localhost:5000/director/addUpdate', {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: newUpdate,
    })

    fetchUpdates()
  }

  return (
    <div className="bg-slate-400 min-h-screen flex flex-col">
      <form className="m-3 flex" onSubmit={addUpdate}>
        <label className="flex-grow">
          <textarea
            className="bg-gray-500 block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300"
            
            id="newUpdate"
            placeholder="Add an update..."
          />
        </label>
        <button className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm ml-3 px-5 py-2.5 ">
          Go
        </button>
      </form>

      {updates?.map((item, i) => (
        <div className='flex-grow m-3' key={i}>
        <div className='text-center bg-gray-500 block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300'>
          {item.text}: {new Date(item.date).toLocaleDateString('en-CA')}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Updates