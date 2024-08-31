// import React, { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { useEcom } from "../context/EcomContext";

// const AllHotelsDetails = () => {
//   const { hotels } = useEcom();
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [filteredHotels, setFilteredHotels] = useState(hotels);

//   useEffect(() => {
//     const searchParams = new URLSearchParams(location.search);
//     const searchTerm = searchParams.get('search');
    
//     if (searchTerm) {
//       const filtered = hotels.filter((hotel) => 
//         hotel.location.area.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         hotel.location.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         hotel.location.country.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//       setFilteredHotels(filtered);
//     } else {
//       setFilteredHotels(hotels);
//     }
//   }, [location.search, hotels]);

  // const handleBookNow = (hotel) => {
  //   navigate("/checkin", { state: { hotel } });
  // };
  // const handleBookNow = async (hotel) => {
    // const currentUserId = getCurrentUserId();
  
    // if (!currentUserId) {
    //   console.error('User not logged in');
      
    //   return;
    // }
  
//     try {
//       const response = await fetch('http://localhost:5000/api/bookings/checkout', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           // 'Authorization': Bearer `${getAuthToken()}`
//         },
//         body: JSON.stringify({
//           userId: currentUserId,
//           hotelId: hotel.id,
//           roomType: selectedRoom.type,
//           checkInDate: checkInDate,
//           checkOutDate: checkOutDate,
//           totalPrice: calculateTotalPrice(selectedRoom, checkInDate, checkOutDate)
//         })
//       });
//    res.json({
//         success: true  });
      
//     } catch (error) {
//       console.error('Error during booking:', error);

//       navigate("/checkin", { state: { hotel } });
//     };
//   }
  

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-8 text-center">All Hotels and Rooms</h1>
//       {filteredHotels.map(hotel => (
//         <div key={hotel.id} className="mb-16">
//           <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center">{hotel.name}</h2>
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
//             <div>
//               <img src={hotel.image} alt={hotel.name} className="w-full h-64 sm:h-96 object-cover rounded-lg shadow-lg mb-4" />
//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
//                 {hotel.gallery.map((img, index) => (
//                   <img key={index} src={img} alt={`${hotel.name} ${index + 1}`} className="w-full h-24 sm:h-32 object-cover rounded shadow" />
//                 ))}
//               </div>
//             </div>
//             <div>
//               <p className="text-base sm:text-lg md:text-xl mb-6">{hotel.description}</p>
//               <h3 className="text-xl sm:text-2xl font-bold mb-4">Amenities</h3>
//               <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
//                 {hotel.amenities.map((amenity, index) => (
//                   <li key={index} className="flex items-center">
//                     <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
//                     {amenity}
//                   </li>
//                 ))}
//               </ul>
//               <h3 className="text-xl sm:text-2xl font-bold mb-4">Location</h3>
//               <p>{`${hotel.location.area}, ${hotel.location.city}, ${hotel.location.country}`}</p>
//             </div>
//           </div>
//           <h3 className="text-2xl sm:text-3xl font-bold mb-6">Available Rooms</h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//             {hotel.rooms.map((room, index) => (
//               <div key={index} className="border p-4 rounded-lg shadow-lg flex flex-col">
//                 <img src={room.image} alt={room.type} className="w-full h-32 sm:h-48 object-cover rounded mb-4" />
//                 <h4 className="text-xl font-bold mb-2">{room.type}</h4>
//                 <p className="text-lg mb-4">{room.description}</p>
//                 <p className="text-lg font-bold mb-4">₦{room.price} per night</p>
//                 <button 
//                   onClick={() => handleBookNow(hotel)}
//                   className="mt-auto bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded"
//                 >
//                   Book Now
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default AllHotelsDetails;


// import React, { useContext, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import EcomContext from "../context/EcomContext"

// const AllHotelsDetails = () => {
//   const {filteredHotels} = useContext(EcomContext)
//   const navigate = useNavigate();
  
//   const [checkInDate, setCheckInDate] = useState('');
//   const [checkOutDate, setCheckOutDate] = useState('');

//   const getCurrentUserId = () => {

//     return localStorage.getItem('userId');
//   };

//   const getAuthToken = () => {
 
//     return localStorage.getItem('authToken');
//   };

//   const calculateTotalPrice = (room, checkIn, checkOut) => {
  
//     const nights = (new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24);
//     return room.price * nights;
//   };

//   const handleBookNow = async (hotel, room) => {
//     const currentUserId = getCurrentUserId();
//     if (!currentUserId) {
//       console.error('User not logged in');
//       return;
//     }
//     try {
//       const response = await fetch('http://localhost:5000/api/bookings/checkout', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': Bearer `${getAuthToken()}`
//         },
//         body: JSON.stringify({
//           userId: currentUserId,
//           hotelId: hotel.id,
//           roomType: room.type,
//           checkInDate: checkInDate,
//           checkOutDate: checkOutDate,
//           totalPrice: calculateTotalPrice(room, checkInDate, checkOutDate)
//         })
//       });
//       const res = await response.json();
//       if (res.success) {
//         navigate("/checkin", { state: { hotel } });
//       } else {
//         console.error('Booking failed');
//       }
//     } catch (error) {
//       console.error('Error during booking:', error);
//     }
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-8 text-center">All Hotels and Rooms</h1>
//       {filteredHotels.map((hotel) => (
//         <div key={hotel.id} className="mb-16">
//           <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center">{hotel.name}</h2>
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
//             <div>
//               <img src={hotel.image} alt={hotel.name} className="w-full h-64 sm:h-96 object-cover rounded-lg shadow-lg mb-4" />
//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
//                 {hotel.gallery.map((img, index) => (
//                   <img key={index} src={img} alt={`${hotel.name} ${index + 1}`} className="w-full h-24 sm:h-32 object-cover rounded shadow" />
//                 ))}
//               </div>
//             </div>
//             <div>
//               <p className="text-base sm:text-lg md:text-xl mb-6">{hotel.description}</p>
//               <h3 className="text-2xl sm:text-3xl font-bold mb-6">Available Rooms</h3>
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//                 {hotel.rooms.map((room, index) => (
//                   <div key={index} className="border p-4 rounded-lg shadow-lg flex flex-col">
//                     <img src={room.image} alt={room.type} className="w-full h-32 sm:h-48 object-cover rounded mb-4" />
//                     <h4 className="text-xl font-bold mb-2">{room.type}</h4>
//                     <p className="text-lg mb-4">{room.description}</p>
//                     <p className="text-lg font-bold mb-4">₦{room.price} per night</p>
//                     <input
//                       type="date"
//                       value={checkInDate}
//                       onChange={(e) => setCheckInDate(e.target.value)}
//                       className="mb-2 p-2 border rounded"
//                       placeholder="Check-in Date"
//                     />
//                     <input
//                       type="date"
//                       value={checkOutDate}
//                       onChange={(e) => setCheckOutDate(e.target.value)}
//                       className="mb-2 p-2 border rounded"
//                       placeholder="Check-out Date"
//                     />
//                     <button 
//                       onClick={() => handleBookNow(hotel, room)}
//                       className="mt-auto bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded"
//                     >
//                       Book Now
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default AllHotelsDetails;

// import React, { useContext, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useEcom } from "../context/EcomContext";

// const AllHotelsDetails = () => {
//   const { filteredHotels, setSearchCriteria, setBooking } = useEcom();
//   const navigate = useNavigate();
  
//   const [checkInDate, setCheckInDate] = useState('');
//   const [checkOutDate, setCheckOutDate] = useState('');

//   const handleDateChange = (setter) => (e) => {
//     setter(e.target.value);
//   };

//   const handleBookNow = (hotel, room) => {
//     if (!checkInDate || !checkOutDate) {
//       alert("Please select both check-in and check-out dates.");
//       return;
//     }

//     console.log('Room price:', room.price);

//     setSearchCriteria(prev => ({
//       ...prev,
//       checkIn: checkInDate,
//       checkOut: checkOutDate
//     }));

  
//     setBooking({
//       hotelId: hotel.id,
//       roomType: room.type,
//       checkInDate,
//       checkOutDate,
//       price: room.price,
    
//     });

  
//     navigate("/checkin", { 
//       state: { 
//         hotel,
//         room,
//         checkIn: checkInDate,
//         checkOut: checkOutDate,
//         price: room.price,
//       } 
//     });
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-8 text-center">All Hotels and Rooms</h1>
//       {filteredHotels.map((hotel) => (
//         <div key={hotel.id} className="mb-16">
//           <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center">{hotel.name}</h2>
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
//             <div>
//               <img src={hotel.image} alt={hotel.name} className="w-full h-64 sm:h-96 object-cover rounded-lg shadow-lg mb-4" />
//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
//                 {hotel.gallery.map((img, index) => (
//                   <img key={index} src={img} alt={`${hotel.name} ${index + 1}`} className="w-full h-24 sm:h-32 object-cover rounded shadow" />
//                 ))}
//               </div>
//             </div>
//             <div>
//               <p className="text-base sm:text-lg md:text-xl mb-6">{hotel.description}</p>
//               <h3 className="text-2xl sm:text-3xl font-bold mb-6">Available Rooms</h3>
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//                 {hotel.rooms.map((room, index) => (
//                   <div key={index} className="border p-4 rounded-lg shadow-lg flex flex-col">
//                     <img src={room.image} alt={room.type} className="w-full h-32 sm:h-48 object-cover rounded mb-4" />
//                     <h4 className="text-xl font-bold mb-2">{room.type}</h4>
//                     <p className="text-lg mb-4">{room.description}</p>
//                     <p className="text-lg font-bold mb-4">₦{room.price} per night</p>
//                     <input
//                       type="date"
//                       value={checkInDate}
//                       onChange={handleDateChange(setCheckInDate)}
//                       className="mb-2 p-2 border rounded"
//                       placeholder="Check-in Date"
//                     />
//                     <input
//                       type="date"
//                       value={checkOutDate}
//                       onChange={handleDateChange(setCheckOutDate)}
//                       className="mb-2 p-2 border rounded"
//                       placeholder="Check-out Date"
//                     />
//                     <button 
//                       onClick={() => handleBookNow(hotel, room)}
//                       className="mt-auto bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded"
//                     >
//                       Book Now
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default AllHotelsDetails;



// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useEcom } from "../context/EcomContext";

// const AllHotelsDetails = () => {
//   const { hotels, hotelRooms, fetchHotels, fetchHotelRooms, setSearchCriteria } = useEcom();
//   const navigate = useNavigate();
  
//   const [loading, setLoading] = useState(true);
//   const [checkInDate, setCheckInDate] = useState('');
//   const [checkOutDate, setCheckOutDate] = useState('');

//   useEffect(() => {
//     const loadData = async () => {
//       await Promise.all([fetchHotels(), fetchHotelRooms()]);
//       setLoading(false);
//     };
//     loadData();
//   }, [fetchHotels, fetchHotelRooms]);

//   const handleDateChange = (setter) => (e) => {
//     setter(e.target.value);
//   };

//   const handleBookNow = (hotel) => {
//     setSearchCriteria({
//       checkIn: checkInDate,
//       checkOut: checkOutDate,
//       location: hotel.location,
//     });
//     navigate(`/hotel/${hotel._id}`);
//   };

//   if (loading) {
//     return <div className="text-center py-10">Loading...</div>;
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h2 className="text-3xl font-bold mb-6">Available Hotels</h2>
//       <div className="mb-6">
//         <label className="block mb-2">Check-in Date:
//           <input type="date" value={checkInDate} onChange={handleDateChange(setCheckInDate)} className="ml-2 p-2 border rounded" />
//         </label>
//         <label className="block mb-2">Check-out Date:
//           <input type="date" value={checkOutDate} onChange={handleDateChange(setCheckOutDate)} className="ml-2 p-2 border rounded" />
//         </label>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {hotels.map(hotel => (
//           <div key={hotel._id} className="bg-white rounded-lg shadow-md overflow-hidden">
//             <img src={`http://localhost:5000/${hotel.image[0]}`} alt={hotel.name} className="w-full h-48 object-cover" />
//             <div className="p-4">
//               <h3 className="text-xl font-semibold mb-2">{hotel.name}</h3>
//               <p className="text-gray-600 mb-2">{hotel.location}</p>
//               <p className="text-sm text-gray-500 mb-4">{hotel.description.substring(0, 100)}...</p>
//               <div className="flex justify-between items-center">
//                 <p className="text-lg font-bold text-blue-600">
//                   ${Math.min(...hotelRooms.filter(room => room.hotelId === hotel._id).map(room => room.price))} / night
//                 </p>
//                 <button 
//                   onClick={() => handleBookNow(hotel)} 
//                   className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
//                 >
//                   Book Now
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AllHotelsDetails;


// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useEcom } from "../context/EcomContext";

// const AllHotelsDetails = () => {
//   const { hotels, hotelRooms, fetchHotels, fetchHotelRooms, setSearchCriteria, setBooking } = useEcom();
//   const navigate = useNavigate();
  
//   const [loading, setLoading] = useState(true);
//   const [checkInDate, setCheckInDate] = useState('');
//   const [checkOutDate, setCheckOutDate] = useState('');

//   useEffect(() => {
//     const loadData = async () => {
//       await Promise.all([fetchHotels(), fetchHotelRooms()]);
//       setLoading(false);
//     };
//     loadData();
//   }, [fetchHotels, fetchHotelRooms]);

//   const handleDateChange = (setter) => (e) => {
//     setter(e.target.value);
//   };

//   const handleBookNow = (hotel, room) => {
//     if (!checkInDate || !checkOutDate) {
//       alert("Please select both check-in and check-out dates.");
//       return;
//     }

//     setSearchCriteria(prev => ({
//       ...prev,
//       checkIn: checkInDate,
//       checkOut: checkOutDate
//     }));

//     setBooking({
//       hotelId: hotel._id,
//       roomType: room.roomType,
//       checkInDate,
//       checkOutDate,
//       price: room.price,
//     });

//     navigate("/checkin", { 
//       state: { 
//         hotel,
//         room,
//         checkIn: checkInDate,
//         checkOut: checkOutDate,
//         price: room.price,
//       } 
//     });
//   };

//   if (loading) {
//     return <div className="text-center py-10">Loading...</div>;
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-8 text-center">All Hotels and Rooms</h1>
//       {hotels.map((hotel) => (
//         <div key={hotel._id} className="mb-16">
//           <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center">{hotel.name}</h2>
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
//             <div>
//               <img src={`http://localhost:5000/${hotel.image[0]}`} alt={hotel.name} className="w-full h-64 sm:h-96 object-cover rounded-lg shadow-lg mb-4" />
//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
//                 {hotel.image.slice(1).map((img, index) => (
//                   <img key={index} src={`http://localhost:5000/${img}`} alt={`${hotel.name} ${index + 1}`} className="w-full h-24 sm:h-32 object-cover rounded shadow" />
//                 ))}
//               </div>
//             </div>
//             <div>
//               <p className="text-base sm:text-lg md:text-xl mb-6">{hotel.description}</p>
//               <h3 className="text-2xl sm:text-3xl font-bold mb-6">Available Rooms</h3>
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//                 {hotelRooms.filter(room => room.hotelId === hotel._id).map((room, index) => (
//                   <div key={index} className="border p-4 rounded-lg shadow-lg flex flex-col">
//                     <img src={`http://localhost:5000/${room.image}`} alt={room.roomType} className="w-full h-32 sm:h-48 object-cover rounded mb-4" />
//                     <h4 className="text-xl font-bold mb-2">{room.roomType}</h4>
//                     <p className="text-lg mb-4">{room.description}</p>
//                     <p className="text-lg font-bold mb-4">₦{room.price} per night</p>
//                     <input
//                       type="date"
//                       value={checkInDate}
//                       onChange={handleDateChange(setCheckInDate)}
//                       className="mb-2 p-2 border rounded"
//                       placeholder="Check-in Date"
//                     />
//                     <input
//                       type="date"
//                       value={checkOutDate}
//                       onChange={handleDateChange(setCheckOutDate)}
//                       className="mb-2 p-2 border rounded"
//                       placeholder="Check-out Date"
//                     />
//                     <button 
//                       onClick={() => handleBookNow(hotel, room)}
//                       className="mt-auto bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded"
//                     >
//                       Book Now
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default AllHotelsDetails;


// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useEcom } from "../context/EcomContext";

// const AllHotelsDetails = () => {
//   const { hotels, hotelRooms, fetchHotels, fetchHotelRooms, setSearchCriteria, setBooking } = useEcom();
//   const navigate = useNavigate();

//   const [loading, setLoading] = useState(true);
//   const [checkInDate, setCheckInDate] = useState('');
//   const [checkOutDate, setCheckOutDate] = useState('');

//   useEffect(() => {
//     const loadData = async () => {
//       await Promise.all([fetchHotels(), fetchHotelRooms()]);
//       setLoading(false);
//     };
//     loadData();
//   }, [fetchHotels, fetchHotelRooms]);

//   const handleDateChange = (setter) => (e) => {
//     setter(e.target.value);
//   };
  

//   const handleBookNow = (hotel, room) => {
//     if (!checkInDate || !checkOutDate) {
//       alert("Please select both check-in and check-out dates.");
//       return;
//     }

//     setSearchCriteria(prev => ({
//       ...prev,
//       checkIn: checkInDate,
//       checkOut: checkOutDate,
//     }));

//     setBooking({
//       hotelId: hotel._id,
//       roomType: room.roomType,
//       checkInDate,
//       checkOutDate,
//       price: room.price,
//     });

//     navigate("/checkin", {
//       state: {
//         hotel,
//         room,
//         checkIn: checkInDate,
//         checkOut: checkOutDate,
//         price: room.price,
//       },
//     });
//   };

//   if (loading) {
//     return <div className="text-center py-10">Loading...</div>;
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-4xl font-bold mb-10 text-center text-gray-800">Explore Our Hotels and Rooms</h1>
//       {hotels.map((hotel) => (
//         <div key={hotel._id} className="mb-20 bg-blue-300 p-8 rounded-lg shadow-lg">
//           <h2 className="text-3xl font-semibold mb-6 text-center text-teal-600">{hotel.name}</h2>
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//             <div className="flex flex-col items-center">
//               {hotel.image && (
//                 <img
//                   src={`http://localhost:5000/${Array.isArray(hotel.image) ? hotel.image[0] : hotel.image}`}
//                   alt={hotel.name}
//                   className="w-full h-64 object-cover rounded-lg shadow-md mb-4"
//                 />
//               )}
//               <div className="grid grid-cols-3 gap-2">
//                 {Array.isArray(hotel.image) &&
//                   hotel.image.slice(1).map((image, index) => (
//                     <img
//                       key={index}
//                       src={`http://localhost:5000/${image}`}
//                       alt={`${hotel.name} ${index + 1}`}
//                       className="w-20 h-20 object-cover rounded shadow"
//                     />
//                   ))}
//               </div>
//             </div>
//             <div>
//               <p className="text-lg text-gray-700 mb-6">{hotel.description}</p>
//               <h3 className="text-2xl font-semibold mb-4 text-teal-600">Available Rooms</h3>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                 {hotelRooms
//                   .filter((room) => room.hotelId === hotel._id)
//                   .map((room, index) => (
//                     <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
//                       {room.image && (
//                         <img
//                           src={`http://localhost:5000/${room.image}`}
//                           alt={room.roomType}
//                           className="w-full h-48 object-cover rounded mb-4"
//                         />
//                       )}
//                       <h4 className="text-xl font-bold mb-2 text-teal-700">{room.roomType}</h4>
//                       <p className="text-gray-600 mb-4">{room.description}</p>
//                       <p className="text-lg font-bold text-teal-800 mb-4">₦{room.price} per night</p>
//                       <input
//                         type="date"
//                         value={checkInDate}
//                         onChange={handleDateChange(setCheckInDate)}
//                         className="mb-2 p-3 border rounded w-full text-gray-700"
//                       />
//                       <input
//                         type="date"
//                         value={checkOutDate}
//                         onChange={handleDateChange(setCheckOutDate)}
//                         className="mb-4 p-3 border rounded w-full text-gray-700"
//                       />
//                       <button
//                         onClick={() => handleBookNow(hotel, room)}
//                         className="w-full bg-teal-500 hover:bg-teal-600 text-black font-bold py-2 px-4 rounded transition duration-300"
//                       >
//                         Book Now
//                       </button>
//                     </div>
//                   ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default AllHotelsDetails;



// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useEcom } from "../context/EcomContext";

// const AllHotelsDetails = () => {
//   const { hotels, hotelRooms, fetchHotels, fetchHotelRooms, setSearchCriteria, setBooking } = useEcom();
//   const navigate = useNavigate();

//   const [loading, setLoading] = useState(true);
//   const [checkInDate, setCheckInDate] = useState('');
//   const [checkOutDate, setCheckOutDate] = useState('');

//   useEffect(() => {
//     const loadData = async () => {
//       await Promise.all([fetchHotels(), fetchHotelRooms()]);
//       setLoading(false);
//     };
//     loadData();
//   }, [fetchHotels, fetchHotelRooms]);

//   const handleDateChange = (setter) => (e) => {
//     setter(e.target.value);
//   };

//   const handleBookNow = (hotel, room) => {
//     if (!checkInDate || !checkOutDate) {
//       alert("Please select both check-in and check-out dates.");
//       return;
//     }

//     setSearchCriteria(prev => ({
//       ...prev,
//       checkIn: checkInDate,
//       checkOut: checkOutDate,
//     }));

//     setBooking({
//       hotelId: hotel._id,
//       roomType: room.roomType,
//       checkInDate,
//       checkOutDate,
//       price: room.price,
//     });

//     navigate("/checkin", {
//       state: {
//         hotel,
//         room,
//         checkIn: checkInDate,
//         checkOut: checkOutDate,
//         price: room.price,
//       },
//     });
//   };

//   if (loading) {
//     return <div className="text-center py-10">Loading...</div>;
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-4xl font-bold mb-10 text-center text-gray-800">Explore Our Hotels and Rooms</h1>
//       {hotels.map((hotel) => (
//         <div key={hotel._id} className="mb-20 bg-blue-300 p-8 rounded-lg shadow-lg">
//           <h2 className="text-3xl font-semibold mb-6 text-center text-teal-600">{hotel.name}</h2>
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//             <div className="flex flex-col items-center">
//               {hotel.image && (
//                 <img
//                   src={`http://localhost:5000/${Array.isArray(hotel.image) ? hotel.image[0] : hotel.image}`}
//                   alt={hotel.name}
//                   className="w-64 h-64 object-cover rounded-lg shadow-md mb-4"
//                 />
//               )}
//               <div className="grid grid-cols-3 gap-2">
//                 {Array.isArray(hotel.image) &&
//                   hotel.image.slice(1).map((image, index) => (
//                     <img
//                       key={index}
//                       src={`http://localhost:5000/${image}`}
//                       alt={`${hotel.name} ${index + 1}`}
//                       className="w-20 h-20 object-cover rounded shadow"
//                     />
//                   ))}
//               </div>
//             </div>
//             <div>
//               <p className="text-lg text-gray-700 mb-6">{hotel.description}</p>
//               <h3 className="text-2xl font-semibold mb-4 text-teal-600">Available Rooms</h3>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                 {hotelRooms
//                   .filter((room) => room.hotelId === hotel._id)
//                   .map((room, index) => (
//                     <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
//                       {room.image && (
//                         <img
//                           src={`http://localhost:5000/${room.image}`}
//                           alt={room.roomType}
//                           className="w-64 h-48 object-cover rounded mb-4"
//                         />
//                       )}
//                       <h4 className="text-xl font-bold mb-2 text-teal-700">{room.roomType}</h4>
//                       <p className="text-gray-600 mb-4">{room.description}</p>
//                       <p className="text-lg font-bold text-teal-800 mb-4">₦{room.price} per night</p>
//                       <input
//                         type="date"
//                         value={checkInDate}
//                         onChange={handleDateChange(setCheckInDate)}
//                         className="mb-2 p-3 border rounded w-full text-gray-700"
//                       />
//                       <input
//                         type="date"
//                         value={checkOutDate}
//                         onChange={handleDateChange(setCheckOutDate)}
//                         className="mb-4 p-3 border rounded w-full text-gray-700"
//                       />
//                       <button
//                         onClick={() => handleBookNow(hotel, room)}
//                         className="w-full bg-teal-500 hover:bg-teal-600 text-black font-bold py-2 px-4 rounded transition duration-300"
//                       >
//                         Book Now
//                       </button>
//                     </div>
//                   ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default AllHotelsDetails;


// import React, { useState } from "react";
// import { useEcom } from "../context/EcomContext";

// const AllHotelsDetails = () => {
//   const { hotels, hotelRooms, setBooking } = useEcom();
//   const [selectedHotel, setSelectedHotel] = useState(null);
//   const [selectedRoom, setSelectedRoom] = useState(null);
//   const [checkInDate, setCheckInDate] = useState("");
//   const [checkOutDate, setCheckOutDate] = useState("");
//   const [guests, setGuests] = useState(1);

//   const handleBooking = () => {
//     const bookingData = {
//       hotelId: selectedHotel._id,
//       roomType: selectedRoom.type,
//       checkInDate,
//       checkOutDate,
//       guests,
//     };
//     setBooking(bookingData);
//     // Navigate to the booking page after setting the booking data
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold text-center mb-8">Select Your Hotel and Room</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {hotels.map((hotel) => (
//           <div
//             key={hotel._id}
//             className={`border p-4 rounded-lg shadow-lg hover:shadow-xl transition ${
//               selectedHotel && selectedHotel._id === hotel._id ? "border-blue-500" : ""
//             }`}
//             onClick={() => setSelectedHotel(hotel)}
//           >
//             <h2 className="text-xl font-semibold">{hotel.name}</h2>
//             <p className="text-gray-600">{hotel.location}</p>
//             <p className="mt-2">{hotel.description}</p>
//           </div>
//         ))}
//       </div>

//       {selectedHotel && (
//         <div className="mt-8 bg-pink-500">
//           <h2 className="text-2xl font-bold">Select a Room Type</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
//             {hotelRooms
//               .filter((room) => room.hotelId === selectedHotel._id)
//               .map((room) => (
//                 <div
//                   key={room._id}
//                   className={`border p-4 rounded-lg shadow-lg hover:shadow-xl transition ${
//                     selectedRoom && selectedRoom._id === room._id ? "border-green-500" : ""
//                   }`}
//                   onClick={() => setSelectedRoom(room)}
//                 >
//                   <h3 className="text-lg font-semibold">{room.type}</h3>
//                   <p className="text-gray-600">{room.description}</p>
//                   <p className="text-sm text-gray-800 mt-2 font-medium">
//                     Price: ${room.price}
//                   </p>
//                 </div>
//               ))}
//           </div>
//         </div>
//       )}

//       {selectedRoom && (
//         <div className="mt-8 bg-blue-500">
//           <h2 className="text-2xl font-bold">Booking Details</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
//             <div>
//               <label className="block font-medium text-gray-700">Check-In Date</label>
//               <input
//                 type="date"
//                 className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//                 value={checkInDate}
//                 onChange={(e) => setCheckInDate(e.target.value)}
//               />
//             </div>
//             <div>
//               <label className="block font-medium text-gray-700">Check-Out Date</label>
//               <input
//                 type="date"
//                 className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//                 value={checkOutDate}
//                 onChange={(e) => setCheckOutDate(e.target.value)}
//               />
//             </div>
//             <div>
//               <label className="block font-medium text-gray-700">Guests</label>
//               <input
//                 type="number"
//                 className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//                 value={guests}
//                 onChange={(e) => setGuests(e.target.value)}
//                 min="1"
//               />
//             </div>
//           </div>
//           <button
//             className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
//             onClick={handleBooking}
//           >
//             Proceed to Booking
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AllHotelsDetails;



// import React, { useEffect, useContext } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import { HotelContext } from '../../components/context/HotelContext';

// const AllHotelsDetails = () => {
//   const { id } = useParams(); // Get the hotel ID from the URL
//   const {
//     hotel,
//     fetchHotelById,
//     fetchHotelRooms,
//     hotelRooms,
//     loading,
//     error
//   } = useContext(HotelContext);

//   // Load hotel data when component mounts or when the `id` changes
//   useEffect(() => {
//     const loadHotelData = async () => {
//       try {
//         await fetchHotelById(id); 
//         await fetchHotelRooms(); 
//       } catch (error) {
//         console.error('Error loading hotel data:', error);
//       }
//     };
//     loadHotelData();
//   }, [id, fetchHotelById, fetchHotelRooms]);
  
//   console.log('Hotel:', hotel);
//   console.log('Hotel Rooms:', hotelRooms);
  
//   // Show loading indicator while fetching data
//   if (loading) {
//     return <div className="text-center py-10">Loading...</div>;
//   }

//   // Show error message if there's an error
//   if (error) {
//     return <div className="text-center py-10 text-red-500">Error: {error}</div>;
//   }

//   // Show "Hotel not found" if the hotel data is null
//   if (!hotel) {
//     return <div className="text-center py-10">Hotel not found</div>;
//   }

//   // Filter rooms for the selected hotel
//   const roomsForHotel = hotelRooms.filter(room => room.hotel._id === hotel._id);

//   // Render the hotel details and available rooms
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-4xl font-bold mb-6">{hotel.name}</h1>
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         <div>
//           <img 
//             src={`http://localhost:5000/${Array.isArray(hotel.image) && hotel.image.length > 0 ? hotel.image[0] : 'default-image.jpg'}`} 
//             className="w-full h-96 object-cover rounded-lg" 
//             alt={hotel.name || 'Hotel Image'} 
//           />
//         </div>
//         <div>
//           <p className="text-lg text-gray-600 mb-4">{hotel.description}</p>
//           <div className="mb-4">
//             <h2 className="text-2xl font-bold">Address</h2>
//             <p>{hotel.address.street}, {hotel.address.area}, {hotel.address.city}, {hotel.address.country}</p>
//           </div>
//           <div className="mb-4">
//             <h2 className="text-2xl font-bold">Amenities</h2>
//             <ul className="list-disc pl-5">
//               {hotel.amenities.map((amenity, index) => (
//                 <li key={index} className="text-lg">{amenity}</li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//       <div className="mt-8">
//         <h2 className="text-3xl font-bold mb-4">Available Rooms</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {roomsForHotel.length > 0 ? roomsForHotel.map((room) => (
//             <div key={room._id} className="bg-white rounded-lg shadow-md p-4">
//               <h3 className="text-xl font-semibold mb-2">{room.name}</h3>
//               <p className="text-gray-600 mb-2">Price: ₦{room.price} / night</p>
//               <p className="text-sm text-gray-500 mb-4">{room.description.substring(0, 100)}...</p>
//               <img 
//                 src={`http://localhost:5000/${room.image && room.image.length > 0 ? room.image[0] : 'default-room-image.jpg'}`} 
//                 className="w-full h-32 object-cover rounded" 
//                 alt={room.name || 'Room Image'} 
//               />
//             </div>
//           )) : <p>No rooms available</p>}
//         </div>
//       </div>
//       <div className="flex justify-between items-center mt-8">
//         <Link to="/listing" className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition duration-300">
//           Back to Hotels
//         </Link>
//         <Link to={`/hotel/${id}/book`} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
//           Book Now
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default AllHotelsDetails;


// import React, { useEffect, useContext } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import { HotelContext } from '../../components/context/HotelContext';

// const AllHotelsDetails = () => {
//   const { id } = useParams(); // Get the hotel ID from the URL
//   const {
//     hotel,
//     fetchHotelById,
//     fetchHotelRooms,
//     hotelRooms,
//     loading,
//     error
//   } = useContext(HotelContext);

//   // Load hotel data when component mounts or when the `id` changes
//   useEffect(() => {
//     const loadHotelData = async () => {
//       try {
//         await fetchHotelById(id); 
//         await fetchHotelRooms(); 
//       } catch (error) {
//         console.error('Error loading hotel data:', error);
//       }
//     };
//     loadHotelData();
//   }, [id, fetchHotelById, fetchHotelRooms]);
  
//   console.log('Hotel:', hotel);
//   console.log('Hotel Rooms:', hotelRooms);
  
//   // Show loading indicator while fetching data
//   if (loading) {
//     return <div className="text-center py-10">Loading...</div>;
//   }

//   // Show error message if there's an error
//   if (error) {
//     return <div className="text-center py-10 text-red-500">Error: {error}</div>;
//   }

//   // Show "Hotel not found" if the hotel data is null
//   if (!hotel) {
//     return <div className="text-center py-10">Hotel not found</div>;
//   }

//   // Filter rooms for the selected hotel
//   const roomsForHotel = hotelRooms.filter(room => room.hotel._id === hotel._id);

//   // Render the hotel details and available rooms
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-4xl font-bold mb-6">{hotel.name}</h1>
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         <div>
//           <img 
//             src={`http://localhost:5000/${hotel.image && Array.isArray(hotel.image) && hotel.image.length > 0 ? hotel.image[0] : 'default-image.jpg'}`} 
//             className="w-full h-96 object-cover rounded-lg" 
//             alt={hotel.name || 'Hotel Image'} 
//           />
//         </div>
//         <div>
//           <p className="text-lg text-gray-600 mb-4">{hotel.description}</p>
//           <div className="mb-4">
//             <h2 className="text-2xl font-bold">Address</h2>
//             <p>{hotel.address.street}, {hotel.address.area}, {hotel.address.city}, {hotel.address.country}</p>
//           </div>
//           <div className="mb-4">
//             <h2 className="text-2xl font-bold">Amenities</h2>
//             <ul className="list-disc pl-5">
//               {hotel.amenities.map((amenity, index) => (
//                 <li key={index} className="text-lg">{amenity}</li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//       <div className="mt-8">
//         <h2 className="text-3xl font-bold mb-4">Available Rooms</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {roomsForHotel.length > 0 ? roomsForHotel.map((room) => (
//             <div key={room._id} className="bg-white rounded-lg shadow-md p-4">
//               <h3 className="text-xl font-semibold mb-2">{room.name}</h3>
//               <p className="text-gray-600 mb-2">Price: ₦{room.price} / night</p>
//               <p className="text-sm text-gray-500 mb-4">{room.description.substring(0, 100)}...</p>
//               <img 
//                 src={`http://localhost:5000/${room.image && room.image.length > 0 ? room.image[0] : 'default-room-image.jpg'}`} 
//                 className="w-full h-32 object-cover rounded" 
//                 alt={room.name || 'Room Image'} 
//               />
//             </div>
//           )) : <p>No rooms available</p>}
//         </div>
//       </div>
//       <div className="flex justify-between items-center mt-8">
//         <Link to="/listing" className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition duration-300">
//           Back to Hotels
//         </Link>
//         <Link to={`/hotel/${id}/book`} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
//           Book Now
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default AllHotelsDetails;



import React, { useState, useEffect, useContext } from 'react';
import { useEcom } from '../context/EcomContext';
import axios from 'axios';

function UserBookings  ()  {
    const { currentUser } = useEcom(); // Fetch the current user from context
    const [bookings, setBookings] = useState([]); // State to store the booking data
    const [loading, setLoading] = useState(true); // State to handle loading state
    const [error, setError] = useState(null); // State to handle errors

    // Fetch user's bookings when the component mounts
    useEffect(() => {
        const fetchUserBookings = async () => {
            if (!currentUser) {
                setError('User is not logged in');
                setLoading(false);
                return;
            }

            try {
                const token = localStorage.getItem('token'); // Retrieve token from local storage
                if (!token) {
                    throw new Error('No authentication token found');
                }

                const response = await axios.get('http://localhost:5000/api/bookings/bookings', {
                    headers: { Authorization: `Bearer ${token}` },
                });
                console.log('User bookings:', response.data);
                
                setBookings(response.data.bookings); // Set bookings data from API response
            } catch (err) {
                console.error('Error fetching user bookings:', err.message);
                setError(err.message || 'An error occurred while fetching bookings');
            } finally {
                setLoading(false);
            }
        };

        fetchUserBookings();
    }, [currentUser]);

    

    if (loading) return <div>Loading booking information...</div>; // Display loading message

    if (error) return <div>Error: {error}</div>; // Display error message

    if (bookings.length === 0) return <div>No bookings found.</div>; // Handle case with no bookings

    // Render booking information
    return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Your Bookings</h2>
            {bookings.map((booking) => (
                <div key={booking._id} className="mb-6 border-b border-gray-200 pb-4">
                    <p><strong>Hotel:</strong> {booking.hotelId?.name || 'Unknown'}</p>
                    <p><strong>Room Type:</strong> {booking.roomType}</p>
                    <p><strong>Check-In Date:</strong> {new Date(booking.checkInDate).toLocaleDateString()}</p>
                    <p><strong>Check-Out Date:</strong> {new Date(booking.checkOutDate).toLocaleDateString()}</p>
                    <p><strong>Guests:</strong> {booking.guests}</p>
                    <p><strong>Total Price:</strong> ₦{booking.totalPrice}</p>
                    <p><strong>Guest Name:</strong> {booking.userName}</p>
                    <p><strong>Email:</strong> {booking.email || 'N/A'}</p>
                    <p><strong>Phone:</strong> {booking.phone || 'N/A'}</p>
                </div>
            ))}
        </div>
    );
};

export default UserBookings;
