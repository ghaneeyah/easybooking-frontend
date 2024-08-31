import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEcom } from '../context/EcomContext';


  const LogOut = () => {
    
    const { logout } = useEcom();
    const navigate = useNavigate();
  
    useEffect(() => {
      logout();
      
      const timer = setTimeout(() => {
        navigate('/');
       }, 3000);
  
      return () => clearTimeout(timer);
    }, [logout, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">You have been logged out</h2>
        <p className="text-center text-gray-700">Thank you for visiting Easy-booking.com You will be redirected to the home page shortly.</p>
      </div>
    </div>
  );
};

export default LogOut;