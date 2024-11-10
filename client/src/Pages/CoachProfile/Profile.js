import React, { useState } from "react";
import footballBg from "../Assets/football.jpg";
import Coachphoto from "../Assets/coach.jpeg";
import { FaTrophy, FaStar, FaClipboardList, FaChalkboardTeacher, FaCertificate, FaFutbol, FaShieldAlt, FaRunning } from 'react-icons/fa';

const Profile = ({ sidebarWidth }) => {

  // Example state for reviews
  const [reviews] = useState([
    { id: 1, name: "Alice", rating: 5, comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
    { id: 2, name: "Bob", rating: 4, comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
    { id: 3, name: "Charlie", rating: 5, comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." }
  ]);

  // State for adding a new review
  //const [newReview, setNewReview] = useState({ name: "", rating: 0, comment: "" });

  //const handleReviewSubmit = (e) => {
  //e.preventDefault();
  //if (newReview.name && newReview.rating > 0 && newReview.comment) {
  //setReviews([...reviews, { ...newReview, id: reviews.length + 1 }]);
  //setNewReview({ name: "", rating: 0, comment: "" });
  //}
  //};

  return (
    <div
      className={`w-full flex flex-col bg-sky-200 transition-all duration-500`}
      style={{
        marginLeft: `${sidebarWidth}`,
        width: `calc(100% - ${sidebarWidth})`,
      }}
    >
      {/* Background Image Section */}
      <div
        className="top-0 relative w-full h-1/2 bg-cover bg-center bg-no-repeat flex items-end justify-center"
        style={{
          backgroundImage: `url(${footballBg})`,
          backgroundSize: "cover",
          height: "50vh",
          backgroundColor: "gray",
        }}
      >
        <div className="absolute bottom-[-40px] w-100 h-100 bg-white rounded-full overflow-hidden border-4 border-white shadow-2xl">
          <img src={Coachphoto} alt="Coach" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Profile Information Section */}
      <div className="flex flex-col items-center mt-24 text-center px-4">
        <h1 className="text-5xl font-bold text-gray-800">John Doe</h1>
        <p className="text-xl text-gray-700 mt-2">"Football Coach with 10 years of experience.."</p>
        <div className="flex mt-2">
          <span className="text-yellow-500 text-3xl">&#9733;</span>
          <span className="text-yellow-500 text-3xl">&#9733;</span>
          <span className="text-yellow-500 text-3xl">&#9733;</span>
          <span className="text-yellow-500 text-3xl">&#9733;</span>
          <span className="text-gray-400 text-3xl">&#9733;</span>
        </div>
      </div>

      <br />

      {/* About Section */}
      <div className="bg-white p-8 mt-8 mx-4 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">About Me</h2>
        <p className="text-lg text-gray-700">
          I have been passionate about football from a young age and have dedicated my career to coaching and developing players. With over 10 years of experience in both youth and professional football, I have honed my skills in Dribbling, Tackling, and Attacking. My goal is to inspire players to reach their full potential both on and off the field. I believe in fostering a positive, supportive environment that encourages growth and success.
        </p>
      </div>

      {/* Strengths Section */}
      <div className="bg-white p-8 mt-8 mx-4 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Strengths</h2>

        {/* Container for all strengths */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Strength 1: Dribbling */}
          <div className="bg-gradient-to-r from-green-500 to-green-300 p-6 rounded-lg shadow-lg flex items-center space-x-4">
            <FaFutbol className="text-4xl text-green-700" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Dribbling</h3>
              <p className="text-gray-700">Masterful control of the ball to maneuver past defenders with ease.</p>
            </div>
          </div>

          {/* Strength 2: Tackling */}
          <div className="bg-gradient-to-r from-blue-500 to-blue-300 p-6 rounded-lg shadow-lg flex items-center space-x-4">
            <FaShieldAlt className="text-4xl text-blue-700" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Tackling</h3>
              <p className="text-gray-700">Exceptional at winning possession with precise and clean tackles.</p>
            </div>
          </div>

          {/* Strength 3: Attacking */}
          <div className="bg-gradient-to-r from-red-500 to-red-300 p-6 rounded-lg shadow-lg flex items-center space-x-4">
            <FaRunning className="text-4xl text-red-700" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Attacking</h3>
              <p className="text-gray-700">A great eye for creating and finishing scoring opportunities.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Achievements and Awards Section */}
      <div className="bg-white p-8 mt-8 mx-4 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Achievements & Awards</h2>

        {/* Container for all achievements */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Achievement 1 */}
          <div className="bg-gradient-to-r from-yellow-500 to-yellow-300 p-6 rounded-lg shadow-lg flex items-center space-x-4">
            <FaTrophy className="text-4xl text-yellow-700" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">National Football Coaching Championship 2021</h3>
              <p className="text-gray-700">Won the prestigious national football coaching championship.</p>
            </div>
          </div>

          {/* Achievement 2 */}
          <div className="bg-gradient-to-r from-blue-500 to-blue-300 p-6 rounded-lg shadow-lg flex items-center space-x-4">
            <FaStar className="text-4xl text-blue-700" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Coach of the Year 2019</h3>
              <p className="text-gray-700">Named "Coach of the Year" by the National Football Coaches Association.</p>
            </div>
          </div>

          {/* Achievement 3 */}
          <div className="bg-gradient-to-r from-green-500 to-green-300 p-6 rounded-lg shadow-lg flex items-center space-x-4">
            <FaClipboardList className="text-4xl text-green-700" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Developed 5 Professional Players</h3>
              <p className="text-gray-700">Mentored 5 players who went on to play in professional football leagues.</p>
            </div>
          </div>

          {/* Achievement 4 */}
          <div className="bg-gradient-to-r from-red-500 to-red-300 p-6 rounded-lg shadow-lg flex items-center space-x-4">
            <FaChalkboardTeacher className="text-4xl text-red-700" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">3 Regional Championships</h3>
              <p className="text-gray-700">Led a local youth team to win 3 regional championships.</p>
            </div>
          </div>

          {/* Achievement 5 */}
          <div className="bg-gradient-to-r from-purple-500 to-purple-300 p-6 rounded-lg shadow-lg flex items-center space-x-4">
            <FaCertificate className="text-4xl text-purple-700" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">UEFA Certified Coach</h3>
              <p className="text-gray-700">Certified in Advanced Football Coaching Techniques by UEFA.</p>
            </div>
          </div>

          {/* Achievement 6 */}
          <div className="bg-gradient-to-r from-purple-500 to-purple-300 p-6 rounded-lg shadow-lg flex items-center space-x-4">
            <FaCertificate className="text-4xl text-purple-700" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">UEFA Certified Coach</h3>
              <p className="text-gray-700">Certified in Advanced Football Coaching Techniques by UEFA.</p>
            </div>
          </div>
        </div>
      </div>


      {/* Ratings and Reviews Section */}
      <div className="bg-white p-8 mt-8 mx-4 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Ratings and Reviews</h2>

        {/* Display Existing Reviews */}
        <div className="space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="flex items-start space-x-4 p-6 border-b border-gray-300 bg-gray-50 rounded-lg shadow-md">
              {/* User Icon */}
              <div className="w-12 h-12 rounded-full bg-blue-900 flex items-center justify-center">
                <span className="text-sky-100 text-xl">{review.name[0]}</span> {/* Initial letter as icon */}
              </div>

              <div className="flex flex-col w-full">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    {/* Rating Stars */}
                    <div className="flex mr-2">
                      {[...Array(5)].map((_, index) => (
                        <span
                          key={index}
                          className={index < review.rating ? "text-yellow-500" : "text-gray-400"}
                        >
                          &#9733;
                        </span>
                      ))}
                    </div>

                  </div>
                </div>
                <p className="mt-2 text-gray-700">{review.comment}</p>
                <p className="text-md">by - {review.name}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Add a New Review Form 
        <div className="mt-6">
          <h3 className="text-2xl font-semibold mb-4">Leave a Review</h3>
          <form onSubmit={handleReviewSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700">Your Name</label>
              <input
                type="text"
                id="name"
                value={newReview.name}
                onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label htmlFor="rating" className="block text-gray-700">Rating</label>
              <select
                id="rating"
                value={newReview.rating}
                onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value) })}
                className="w-full px-4 py-2 border rounded-lg"
                required
              >
                <option value={0}>Select Rating</option>
                <option value={1}>1 Star</option>
                <option value={2}>2 Stars</option>
                <option value={3}>3 Stars</option>
                <option value={4}>4 Stars</option>
                <option value={5}>5 Stars</option>
              </select>
            </div>
            <div>
              <label htmlFor="comment" className="block text-gray-700">Comment</label>
              <textarea
                id="comment"
                value={newReview.comment}
                onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg"
                placeholder="Write your review"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              Submit Review
            </button>
          </form>
                      </div>*/}
      </div>
      <br />
    </div>
  );
};

export default Profile;
