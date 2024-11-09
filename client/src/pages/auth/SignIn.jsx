import React, { useState, useEffect } from 'react';
import { FaGoogle, FaFacebookF, FaGithub } from 'react-icons/fa';
import image1 from "../../Assets/Image1.png";
import image2 from "../../Assets/Image2.png";
import image3 from "../../Assets/Image3.png";
import image4 from "../../Assets/Image4.png";
import image5 from "../../Assets/Image5.png";
import { useNavigate } from 'react-router-dom';

const illustrations = [image1, image2, image3, image4, image5];

const SignIn = () => {
    const navigate = useNavigate();
    const [currentIllustration, setCurrentIllustration] = useState(0);

    const googleLogin = (e) => {
        e.preventDefault();
        window.location.href = `http://localhost:5000/auth/google`;
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIllustration((prev) => (prev + 1) % illustrations.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const handleTeamClick = () => {
        navigate("/signup");
    };

    return (
        <div className="relative min-h-screen overflow-hidden bg-black">
            {/* Background blobs */}
            <div className="background">
                <div className="blob-c min-h-full overflow-hidden absolute w-full blur-xl">
                    <div className="shape-blob bg-blobSkyBlue opacity-70 w-[80px] h-[60px] rounded-full absolute left-[75%] top-[40%] animate-transform animate-movement_one"></div>
                    {/* Additional blobs */}
                    <div className="shape-blob one bg-blobBlue w-[150px] h-[150px] rounded-full absolute left-[20px] top-[10px] rotate-[-180deg] animate-transform animate-movement_two"></div>
                    {/* Other blobs */}
                </div>
            </div>

            {/* Main content */}
            <div className="flex items-center justify-center min-h-screen p-4 relative z-20">
                <div className="flex flex-col lg:flex-row w-full max-w-3xl max-h-[75vh] bg-white bg-opacity-20 backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden">
                    {/* Illustration section */}
                    <div className="lg:w-1/3 w-full p-4 lg:p-0 hidden lg:flex lg:flex-col items-center justify-center h-[75vh]">
                        <div className="relative w-full h-full">
                            <img
                                src={illustrations[currentIllustration]}
                                alt="Illustration"
                                className="min-w-full h-[75vh] object-cover"
                            />
                            <button
                                onClick={handleTeamClick}
                                className="absolute bottom-6 left-1/2 transform -translate-x-1/2 border-solid border-4 border-blue-950 py-2 px-4 bg-gradient-to-r from-sky-500 to-blue-600 text-blue-950 font-bold rounded-lg hover:opacity-90 transition duration-200"
                            >
                                Register
                            </button>
                        </div>
                    </div>

                    {/* Form section */}
                    <div className="lg:w-2/3 w-full p-12 flex flex-col items-center justify-center">
                        <h1 className="text-3xl lg:text-5xl font-bold mb-8 text-center text-white">Login</h1>
                        <h3 style={{ fontFamily: 'Pacifico, cursive' }} className="text-orange-500 text-2xl lg:text-4xl">Welcome Back</h3>

                        {/* Social icons */}
                        <div className="flex space-x-10 my-6">
                            <FaGoogle
                                onClick={googleLogin}
                                className="w-4 text-white text-3xl cursor-pointer hover:text-sky-500 transition duration-200"
                                aria-label="Login with Google"
                            />
                            <FaFacebookF
                                className="w-3 text-white text-3xl cursor-pointer hover:text-sky-500 transition duration-200"
                                aria-label="Login with Facebook"
                            />
                            <FaGithub
                                className="w-5 text-white text-3xl cursor-pointer hover:text-sky-500 transition duration-200"
                                aria-label="Login with Github"
                            />
                        </div>

                        {/* Login form */}
                        <form className="flex flex-col space-y-4 w-full max-w-md">
                            <label className="text-sm font-semibold text-white">Email</label>
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full h-8 md:h-10 px-3 py-1.5 rounded-lg bg-white bg-opacity-25 placeholder-white text-white focus:bg-opacity-40 focus:outline-none transition duration-200"
                            />
                            <label className="text-sm font-semibold text-white">Password</label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full h-8 md:h-10 px-3 py-1.5 rounded-lg bg-white bg-opacity-25 placeholder-white text-white focus:bg-opacity-40 focus:outline-none transition duration-200"
                            />

                            {/* Buttons */}
                            <div className="flex flex-col items-center sm:flex-row justify-between w-full space-y-4 sm:space-y-0">
                                <button
                                    type="submit"
                                    className="w-full mx-auto sm:w-auto px-4 text-base md:text-lg border-solid border-4 border-blue-950 py-2 bg-gradient-to-r from-sky-500 to-blue-600 text-blue-950 font-bold rounded-lg hover:opacity-90 transition duration-200"
                                >
                                    Sign In
                                </button>
                                <div className="mt-4 sm:mt-0 w-full lg:hidden">
                                    <button
                                        onClick={handleTeamClick}
                                        className="w-full px-4 text-base md:text-lg border-solid border-4 border-blue-950 py-2 bg-gradient-to-r from-sky-500 to-blue-600 text-blue-950 font-bold rounded-lg hover:opacity-90 transition duration-200 lg:hidden"
                                    >
                                        Register
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

export default SignIn;
