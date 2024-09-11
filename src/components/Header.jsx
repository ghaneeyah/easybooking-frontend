import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEcom } from '../components/context/EcomContext';
import avatar from '/img/avatar.png';
import ProfileModal from './pages/ProfileModal';

const Header = () => {
  const { currentUser, userProfile, logout, getUserProfile, updateUserProfile } = useEcom();
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  const userImage = userProfile?.image ? `https://hotel-api-3o4k.onrender.com/uploads/${userProfile.image}` : avatar;

  const handleLogout = () => {
    logout();
    setIsProfileModalOpen(false);
  };

  const handleProfileUpdate = async (profileData) => {
    await updateUserProfile(profileData);
    setIsProfileModalOpen(false);
  };

  return (
    <header className="bg-blue-500 py-4 px-4 md:px-10 lg:px-20 flex items-center justify-between">
      <div className="flex items-center">
        <div className="ml-4">
          <Link to="/">
            <h4 className="font-bold text-xl md:text-2xl text-white">EASY BOOKING</h4>
          </Link>
          
        </div>
      </div>

      <nav className="flex items-center space-x-4 md:space-x-6">
        <Link to="/" className="text-white text-sm md:text-base hover:text-gray-300 transition duration-300">
          Home
        </Link>

        {currentUser ? (
          <div className="flex items-center space-x-2 md:space-x-4">
            <div
              className="flex items-center cursor-pointer"
              onClick={() => setIsProfileModalOpen(true)}
            >
              <img
                src={userImage}
                alt="User Avatar"
                className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover"
              />
              <p className="text-white text-sm md:text-base font-semibold ml-2">{userProfile?.firstName || "User"}</p>
            </div>

            <button
              onClick={handleLogout}
              className="text-white text-sm md:text-base hover:text-gray-300 transition duration-300"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex items-center space-x-2 md:space-x-4">
            <Link to="/login" className="text-white text-sm md:text-base hover:text-gray-300 transition duration-300">
              Login
            </Link>
            <Link to="/signup" className="text-white text-sm md:text-base hover:text-gray-300 transition duration-300">
              Sign Up
            </Link>
          </div>
        )}
      </nav>

      
      {isProfileModalOpen && (
        <ProfileModal
          onClose={() => setIsProfileModalOpen(false)}
          onProfileUpdate={handleProfileUpdate}
        />
      )}
    </header>
  );
};

export default Header;
