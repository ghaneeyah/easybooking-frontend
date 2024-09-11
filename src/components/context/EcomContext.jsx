// import React, { createContext, useContext, useState, useMemo, useEffect } from "react";
// import axios from "axios";
// import { HotelProvider } from "./HotelContext";  

// const EcomContext = createContext();

// export const useEcom = () => useContext(EcomContext);

// export const EcomProvider = ({ children }) => {
//   const initialUser = localStorage.getItem('userProfile') ? JSON.parse(localStorage.getItem('userProfile')) : null;
//   const url = "http://localhost:5000";

//   const [searchCriteria, setSearchCriteria] = useState({
//     location: '',
//     checkIn: '',
//     checkOut: '',
//     guests: 1
//   });
  
//   const [currentUser, setCurrentUser] = useState(null);
//   const [totalAmount, setTotalAmount] = useState(0);
//   const [authError, setAuthError] = useState(null);
//   const [bookingData, setBookingData] = useState(null);
//   const [userBookings, setUserBookings] = useState([]);
//   const [currentBooking, setCurrentBooking] = useState(null);
//   const [userProfile, setUserProfile] = useState(initialUser);
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(false);




//   useEffect(() => {
//     const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
//     if (user) {
//       setCurrentUser(user);
//       axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
//     }
//     console.log('Current User:', user); 
//   }, []);

//   const filteredHotels = useMemo(() => {
//     return []; 
//   }, [searchCriteria.location]);

//   const searchHotels = (criteria) => {
//     setSearchCriteria(criteria);
//   };

//   const signup = async (username, email, password) => {
//     try {
//       const response = await axios.post('http://localhost:5000/api/user/register', {
//         UserName: username, email, password
//       });
//       const { user, token } = response.data;

//       if (response.data.success) {
//         setCurrentUser(user);
//         localStorage.setItem('user', JSON.stringify(user));
//         localStorage.setItem('token', token);
//         axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//         setAuthError(null);
//       } else {
//         setAuthError(response.data.message);
//       }
//       return response.data;
//     } catch (error) {
//       console.error('Signup error:', error);
//       setAuthError('An error occurred during signup');
//     }
//   };

//   const login = async (email, password) => {
//     try {
//       const response = await axios.post('http://localhost:5000/api/user/login', {
//         email, password
//       });
//       const { user, token } = response.data;

//       if (response.data.success) {
//         console.log('User from login:', user);  
//         setCurrentUser(user);
//         localStorage.setItem('user', JSON.stringify(user));
//         localStorage.setItem('token', token);
//         axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//         setAuthError(null);
//       } else {
//         setAuthError(response.data.message);
//       }
//       return response.data;
//     } catch (error) {
//       console.error('Login error:', error);
//       setAuthError('An error occurred during login');
//     }
//   };

//   const logout = () => {
//     setCurrentUser(null);
//     localStorage.removeItem('user');
//     localStorage.removeItem('token');
//     delete axios.defaults.headers.common['Authorization'];
//     setAuthError(null);
//   };



//   const getUserProfile = async () => {
//     try {
//       const token = localStorage.getItem("token"); // Retrieve the token
//       const response = await axios.get(url + "/api/profile", {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       setUserProfile(response.data.profile);
//       localStorage.setItem('userProfile', JSON.stringify(response.data.profile));
//       console.log("Fetched user profile:", response.data.profile);
//     } catch (error) {
//       console.error("Error fetching user profile:", error);
//     }
//   };
  
//   const updateUserProfile = async (profileData) => {
//     try {
//       setError(null);
//       setSuccess(false);
//       const token = localStorage.getItem("token"); // Retrieve the token
  
//       let response;
//       if (profileData instanceof FormData) {
//         response = await axios.post(url + "/api/profile/update", profileData, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "multipart/form-data"
//           }
//         });
//       } else {
//         response = await axios.post(url + "/api/profile/update", profileData, {
//           headers: { Authorization: `Bearer ${token}` }
//         });
//       }
  
//       setUserProfile(response.data.profile);
//       localStorage.setItem('userProfile', JSON.stringify(response.data.profile));
//       setSuccess(true);
//     } catch (error) {
//       console.error("Error updating user profile:", error);
//       setError("Failed to update profile. Please try again.");
//     }
//   };
  


 
//   return (
//     <EcomContext.Provider value={{
//       filteredHotels,
//       searchHotels,
//       searchCriteria,
//       setSearchCriteria,
//       // setBooking,
//       currentBooking,
//       // createBooking,
//       // getUserBookings,
//       signup,
//       login,
//       logout,
//       currentUser,
//       setCurrentUser,
//       totalAmount,
//       setTotalAmount,
//       authError,
//       bookingData,
//       userBookings,
//       getUserProfile,
//       userProfile,
//       updateUserProfile,
//       error,
//       success,
//     }}>
      
//       <HotelProvider currentUser={currentUser}>
//         {children}
//       </HotelProvider>
//     </EcomContext.Provider>
//   );
// };

// export default EcomContext;


import React, { createContext, useContext, useState, useMemo, useEffect } from "react";
import axios from "axios";
import { HotelProvider } from "./HotelContext";  

const EcomContext = createContext();

export const useEcom = () => useContext(EcomContext);

export const EcomProvider = ({ children }) => {
  // Safely parse the userProfile from localStorage
  const initialUser = (() => {
    const profile = localStorage.getItem('userProfile');
    try {
      return profile ? JSON.parse(profile) : null;
    } catch (e) {
      console.error("Error parsing userProfile from localStorage:", e);
      return null;
    }
  })();

  const url = "https://hotel-api-3o4k.onrender.com";

  const [searchCriteria, setSearchCriteria] = useState({
    location: '',
    checkIn: '',
    checkOut: '',
    guests: 1
  });
  
  const [currentUser, setCurrentUser] = useState(null);
  const [totalAmount, setTotalAmount] = useState(0);
  const [authError, setAuthError] = useState(null);
  const [bookingData, setBookingData] = useState(null);
  const [userBookings, setUserBookings] = useState([]);
  const [currentBooking, setCurrentBooking] = useState(null);
  const [userProfile, setUserProfile] = useState(initialUser);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    // Safely parse the user from localStorage and set headers
    const user = localStorage.getItem('user');
    try {
      const parsedUser = user ? JSON.parse(user) : null;
      if (parsedUser) {
        setCurrentUser(parsedUser);
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
      }
      console.log('Current User:', parsedUser);
    } catch (e) {
      console.error("Error parsing user from localStorage:", e);
    }
  }, []);

  const filteredHotels = useMemo(() => {
    return []; 
  }, [searchCriteria.location]);

  const searchHotels = (criteria) => {
    setSearchCriteria(criteria);
  };

  const signup = async (username, email, password) => {
    try {
      const response = await axios.post('https://hotel-api-3o4k.onrender.com/api/user/register', {
        UserName: username, email, password
      });
      const { user, token } = response.data;

      if (response.data.success) {
        setCurrentUser(user);
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('token', token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        setAuthError(null);
      } else {
        setAuthError(response.data.message);
      }
      return response.data;
    } catch (error) {
      console.error('Signup error:', error);
      setAuthError('An error occurred during signup');
    }
  };

  const login = async (email, password) => {
    try {
      const response = await axios.post('https://hotel-api-3o4k.onrender.com/api/user/login', {
        email, password
      });
      const { user, token } = response.data;

      if (response.data.success) {
        console.log('User from login:', user);  
        setCurrentUser(user);
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('token', token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        setAuthError(null);
      } else {
        setAuthError(response.data.message);
      }
      return response.data;
    } catch (error) {
      console.error('Login error:', error);
      setAuthError('An error occurred during login');
    }
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    delete axios.defaults.headers.common['Authorization'];
    setAuthError(null);
  };

  const getUserProfile = async () => {
    try {
      const token = localStorage.getItem("token"); // Retrieve the token
      const response = await axios.get(url + "/api/profile", {
        headers: { Authorization: `Bearer ${token}` }
      });
      setUserProfile(response.data.profile);
      localStorage.setItem('userProfile', JSON.stringify(response.data.profile));
      console.log("Fetched user profile:", response.data.profile);
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  };
  
  const updateUserProfile = async (profileData) => {
    try {
      setError(null);
      setSuccess(false);
      const token = localStorage.getItem("token"); // Retrieve the token
  
      let response;
      if (profileData instanceof FormData) {
        response = await axios.post(url + "/api/profile/update", profileData, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data"
          }
        });
      } else {
        response = await axios.post(url + "/api/profile/update", profileData, {
          headers: { Authorization: `Bearer ${token}` }
        });
      }
  
      setUserProfile(response.data.profile);
      localStorage.setItem('userProfile', JSON.stringify(response.data.profile));
      setSuccess(true);
    } catch (error) {
      console.error("Error updating user profile:", error);
      setError("Failed to update profile. Please try again.");
    }
  };

  return (
    <EcomContext.Provider value={{
      filteredHotels,
      searchHotels,
      searchCriteria,
      setSearchCriteria,
      currentBooking,
      signup,
      login,
      logout,
      currentUser,
      setCurrentUser,
      totalAmount,
      setTotalAmount,
      authError,
      bookingData,
      userBookings,
      getUserProfile,
      userProfile,
      updateUserProfile,
      error,
      success,
    }}>
      <HotelProvider currentUser={currentUser}>
        {children}
      </HotelProvider>
    </EcomContext.Provider>
  );
};

export default EcomContext;