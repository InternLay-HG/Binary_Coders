import React, { useState, useEffect } from 'react';
import image1 from "../../Assets/Image1.png";
import image2 from "../../Assets/Image2.png";
import image3 from "../../Assets/Image3.png";
import image4 from "../../Assets/Image4.png";
import image5 from "../../Assets/Image5.png";
import { useNavigate } from 'react-router-dom';

const illustrations = [image1, image2, image3, image4, image5];

const SignUp = () => {
    const navigate = useNavigate();
    const [currentIllustration, setCurrentIllustration] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIllustration((prev) => (prev + 1) % illustrations.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const handleTeamClick = () => {
        navigate("/signin");
    };

    return (
        <div className="relative min-h-screen overflow-hidden bg-black">
            {/* Background and blobs */}
            <div className="background">
                <div className="blob-c min-h-full overflow-hidden absolute w-full blur-xl">
                    <div className="shape-blob bg-blobSkyBlue opacity-70 w-[80px] h-[60px] rounded-full absolute left-[75%] top-[40%] animate-transform animate-movement_one"></div>
                    {/* other blobs */}
                </div>
            </div>

            {/* Main Content */}
            <div className="flex items-center justify-center min-h-screen p-4 relative z-20">
                <div className="flex flex-col lg:flex-row w-full max-w-4xl max-h-[90vh] bg-white bg-opacity-20 backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden">
                    {/* Image Section */}
                    <div className="lg:w-1/3 w-full p-4 lg:p-0 hidden lg:flex lg:flex-col items-center justify-center h-[90vh]">
                        <div className="relative w-full h-full">
                            <img
                                src={illustrations[currentIllustration]}
                                alt="Illustration with Quote"
                                className="min-w-full h-[90vh] object-cover"
                            />
                            <button
                                onClick={handleTeamClick}
                                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 border-solid border-4 border-blue-950 py-2 px-4 bg-gradient-to-r from-sky-500 to-blue-600 text-blue-950 font-bold rounded-lg hover:opacity-90 transition duration-200"
                            >
                                Login
                            </button>
                        </div>
                    </div>

                    {/* Form Section */}
                    <div className="lg:w-2/3 w-full p-8 md:p-12 flex flex-col items-center justify-center">
                        <form className="flex flex-col space-y-3 w-full max-w-md">
                            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4 md:mb-6 text-center text-white">Register</h1>
                            {/* Role Selection */}
                            <div className="flex flex-col space-y-2 mb-3 text-white">
                                <span className="text-sm font-semibold">Register As:</span>
                                <div className="flex items-center space-x-4 md:space-x-10">
                                    {["Athlete", "Coach", "Director", "Fan"].map((role) => (
                                        <label key={role} className="flex items-center cursor-pointer">
                                            <input
                                                type="radio"
                                                name="role"
                                                value={role.toLowerCase()}
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
                            {/* Input Fields */}
                            {["Username", "Email", "Password", "Confirm Password"].map((field) => (
                                <React.Fragment key={field}>
                                    <label htmlFor={field.toLowerCase().replace(" ", "-")} className="text-sm font-semibold text-white mb-1">{field}</label>
                                    <input
                                        id={field.toLowerCase().replace(" ", "-")}
                                        type={field === "Email" ? "email" : field.includes("Password") ? "password" : "text"}
                                        placeholder={field}
                                        className="w-full h-8 md:h-10 px-3 py-1.5 rounded-lg bg-white bg-opacity-25 placeholder-white text-white focus:bg-opacity-40 focus:outline-none transition duration-200"
                                    />
                                </React.Fragment>
                            ))}
                            {/* Submit Button */}
                            <div className="flex flex-col items-center sm:flex-row justify-between w-full space-y-4 sm:space-y-0">
                                <button
                                    type="submit"
                                    className="w-full mx-auto sm:w-auto px-4 text-base md:text-lg border-solid border-4 border-blue-950 py-2 bg-gradient-to-r from-sky-500 to-blue-600 text-blue-950 font-bold rounded-lg hover:opacity-90 transition duration-200"
                                >
                                    Register
                                </button>
                                <div className="mt-4 sm:mt-0 w-full lg:hidden">
                                    <button onClick={handleTeamClick} className="w-full px-4 text-base md:text-lg border-solid border-4 border-blue-950 py-2 bg-gradient-to-r from-sky-500 to-blue-600 text-blue-950 font-bold rounded-lg hover:opacity-90 transition duration-200 lg:hidden">
                                        Sign In
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
