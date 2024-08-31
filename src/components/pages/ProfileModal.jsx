import React from 'react';
import Profile from './Profile';

const ProfileModal = ({ onClose, onProfileUpdate }) => { 
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4 md:p-6">
      <div className="bg-white rounded-lg p-4 md:p-6 w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-3xl max-h-[90vh] overflow-y-auto shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold">Your Profile</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Close Modal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        
        <Profile onProfileUpdate={onProfileUpdate} />
      </div>
    </div>
  );
};

export default ProfileModal;

