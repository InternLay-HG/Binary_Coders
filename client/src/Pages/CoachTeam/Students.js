import React from 'react';

const Students = () => {
    console.log('Students');
    return (
        <div className='px-4 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {[...Array(8)].map((_, index) => (
                <div
                    key={index}
                    className="bg-white shadow-lg rounded-lg overflow-hidden"
                >
                    <img
                        className="w-full h-48 object-cover"
                        src="https://via.placeholder.com/300"
                        alt="Student"
                    />
                    <div className="p-4">
                        <h3 className="text-lg font-bold mb-2">Student Name</h3>
                        <p className="text-gray-600 text-sm mb-4">Brief description or bio goes here.</p>
                        <div className="flex flex-col justify-center gap-2">
                            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                                Profile
                            </button>
                            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                                Add to Team
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Students;
