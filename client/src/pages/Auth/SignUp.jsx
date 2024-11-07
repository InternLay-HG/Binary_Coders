import React, { useState, useEffect } from 'react';

const illustrations = [
    require("../Assets/Image1.png"),
    require("../Assets/Image2.png"),
    require("../Assets/Image3.png"),
    require("../Assets/Image4.png"),
    require("../Assets/Image5.png"),
];

const SignUp = () => {
    const [currentIllustration, setCurrentIllustration] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIllustration((prev) => (prev + 1) % illustrations.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative min-h-screen overflow-hidden bg-black">
            <div className="background">
                <div className="blob-c min-h-full overflow-hidden absolute w-full blur-xl">
                    <div className="shape-blob bg-blobSkyBlue opacity-70 w-[80px] h-[60px] rounded-full absolute left-[75%] top-[40%] animate-transform animate-movement_one"></div>
                    <div className="shape-blob one bg-blobBlue w-[150px] h-[150px] rounded-full absolute left-[20px] top-[10px] rotate-[-180deg] animate-transform animate-movement_two"></div>
                    <div className="shape-blob two bg-blobTeal w-[150px] h-[150px] rounded-full absolute left-[600px] top-[300px] rotate-[-180deg] animate-transform animate-movement_two"></div>
                    <div className="shape-blob three bg-blobLightBlue w-[150px] h-[150px] rounded-full absolute left-[1050px] top-[60vh] rotate-[-180deg] animate-transform animate-movement_two"></div>
                    <div className="shape-blob four bg-blobTeal w-[100px] h-[80px] rounded-full absolute left-[350px] top-[50vh] rotate-[-180deg] animate-transform animate-movement_two"></div>
                    <div className="shape-blob five bg-blobBlue w-[150px] h-[150px] rounded-full absolute left-[80vw] top-[30px] rotate-[-180deg] animate-transform animate-movement_two"></div>
                    <div className="shape-blob six bg-blobLightBlue w-[100px] h-[70px] rounded-full absolute left-[5vw] top-[75vh] rotate-[-180deg] animate-transform animate-movement_two"></div>
                </div>
            </div>
            <div className="flex items-center justify-center min-h-screen p-4 relative z-20">
                <div className="flex flex-col lg:flex-row w-full max-w-4xl max-h-[90vh] bg-white bg-opacity-20 backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden">
                    <div className="lg:w-1/3 w-full p-4 lg:p-0 hidden lg:flex lg:flex-col items-center justify-center h-[90vh]">
                        <div className="relative w-full h-full">
                            <div className="transition-all w-full h-full">
                                <img
                                    src={illustrations[currentIllustration]}
                                    alt="Illustration with Quote"
                                    className="min-w-full h-[90vh] object-cover"
                                />
                            </div>
                            <a href="#signin" className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
                                <button className="border-solid border-4 border-blue-950 py-2 px-4 bg-gradient-to-r from-sky-500 to-blue-600 text-blue-950 font-bold rounded-lg hover:opacity-90 transition duration-200">
                                    Login
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="lg:w-2/3 w-full p-8 md:p-12 flex flex-col items-center justify-center">
                        <form className="flex flex-col space-y-3 w-full max-w-md">
                            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4 md:mb-6 text-center text-white">Register</h1>
                            <div className="flex flex-col space-y-2 mb-3 text-white">
                                <span className="text-sm font-semibold">Register As:</span>
                                <div className="flex items-center space-x-4 md:space-x-10">
                                    {["Athlete", "Coach", "Director", "Fan"].map((role) => (
                                        <label key={role} className="flex items-center cursor-pointer">
                                            <input
                                                type="radio"
                                                name="role"
                                                value={role === "Athlete" ? "athlete" : role === "Director" ? "director" : role === "Coach" ? "coach" : "fan"}
                                                className="hidden peer"
                                            />
                                            <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-white rounded-full peer-checked:border-transparent peer-checked:bg-gradient-to-r from-sky-500 to-blue-600 peer-checked:shadow-lg transition duration-200">
                                                <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-white rounded-full m-auto transform scale-0 peer-checked:scale-100 transition duration-200"></div>
                                            </div>
                                            <span className="ml-2 text-white peer-checked:text-sky-500 font-semibold transition duration-200 text-sm md:text-base">
                                                {role}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                            {["Username", "Email", "Password", "Confirm Password"].map((field) => (
                                <React.Fragment key={field}>
                                    <label className="text-sm font-semibold text-white mb-1">{field}</label>
                                    <input
                                        type={field === "Email" ? "email" : field === "Password" || field === "Confirm Password" ? "password" : "text"}
                                        placeholder={field}

                                        
                                        className="w-full h-8 md:h-10 px-3 py-1.5 rounded-lg bg-white bg-opacity-25 placeholder-white text-white focus:bg-opacity-40 focus:outline-none transition duration-200"
                                    />
                                </React.Fragment>
                            ))}


                            <div className="flex flex-col items-center sm:flex-row justify-between w-full space-y-4 sm:space-y-0">
                                <button
                                    type="submit"
                                    className="w-full mx-auto sm:w-auto px-4 text-base md:text-lg border-solid border-4 border-blue-950 py-2 bg-gradient-to-r from-sky-500 to-blue-600 text-blue-950 font-bold rounded-lg hover:opacity-90 transition duration-200"
                                >
                                    Register
                                </button>
                                <a href="#signup" className="mt-4 sm:mt-0 w-full lg:hidden">
                                    <button className="w-full px-4 text-base md:text-lg border-solid border-4 border-blue-950 py-2 bg-gradient-to-r from-sky-500 to-blue-600 text-blue-950 font-bold rounded-lg hover:opacity-90 transition duration-200 lg:hidden">
                                        Sign In
                                    </button>
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
