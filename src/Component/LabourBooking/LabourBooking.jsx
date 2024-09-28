// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useAuth } from "../../context/auth";
// import "../LabourBooking/LabourBooking.css";
// import Layout from "../Layout/Layout";

// const LabourBooking = () => {
//   const [bookings, setBookings] = useState([]);
//   const [auth] = useAuth();

//   useEffect(() => {
//     // Fetch bookings based on labourId
//     const fetchBookings = async () => {
//         console.log(auth?.userId);
//       try {
//         const response = await axios.get(
//           `http://localhost:9000/api/v1/booking/labour-id/${auth?.userId}`,
//           {
//             headers: {
//               Authorization: auth?.token,
//             },
//           }
//         );
//         setBookings(response.data);
//         console.log(response.data);
//       } catch (error) {
//         console.error("Error fetching bookings:", error);
//       }
//     };

//     fetchBookings();
//   }, []);

//   return (
//     <div className="booking-container">
//       <h2>Bookings for Labour ID: {auth?.userId}</h2>
//       <div className="booking-cards">
//         {bookings.length > 0 ? (
//           bookings.map((booking) => (
//             <BookingCard key={booking.id} booking={booking} />
//           ))
//         ) : (
//           <p>No bookings available for this labour.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// const BookingCard = ({ booking }) => {
//   const { ownerId, startTime, endTime, amount, bookingStatus, ownerPhoneNumber } =
//     booking;

//   return (
//     <Layout>
//     <div className="booking-card">
//       <h3>Booking Information</h3>
//       {/* <p><strong>Owner ID:</strong> {ownerId}</p> */}
//       <p><strong>Start Time:</strong> {new Date(startTime).toLocaleString()}</p>
//       <p><strong>End Time:</strong> {new Date(endTime).toLocaleString()}</p>
//       <p><strong>Amount Paid:</strong> ₹{amount}</p>
//       <p><strong>Payment Status:</strong> {bookingStatus}</p>
//       <p><strong>Owner's Phone Number:</strong> {ownerPhoneNumber}</p>
//     </div>
//     </Layout>
//   );
// };

// export default LabourBooking;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/auth";
import "../LabourBooking/LabourBooking.css";
import Layout from "../Layout/Layout";

const LabourBooking = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state
  const [auth] = useAuth();

  useEffect(() => {
    // Fetch bookings based on labourId
    const fetchBookings = async () => {
      console.log(auth?.userId);
      try {
        const response = await axios.get(
          `http://localhost:9000/api/v1/booking/labour-id/${auth?.userId}`, // Ensure this is correct
          {
            headers: {
              Authorization: auth?.token,
            },
          }
        );
        setBookings(response.data);
        console.log(response.data);
      } catch (error) {
        setError("Error fetching bookings."); // Set error state
        console.error("Error fetching bookings:", error);
      } finally {
        setLoading(false); // Set loading to false after fetch
      }
    };

    fetchBookings();
  }, [auth]);

  if (loading) {
    return <div>Loading...</div>; // Display loading message
  }

  return (
    <Layout> {/* Wrap entire component in Layout */}
      <div className="booking-container">
        <h2>Bookings for Labour ID: {auth?.userId}</h2>
        <div className="booking-cards">
          {error ? (
            <p>{error}</p> // Display error message
          ) : bookings.length > 0 ? (
            bookings.map((booking) => (
              <BookingCard key={booking.id} booking={booking} />
            ))
          ) : (
            <p>No bookings available for this labour.</p>
          )}
        </div>
      </div>
    </Layout>
  );
};

const BookingCard = ({ booking }) => {
  const { userId, startTime, endTime, amount, orderStatus, ownerPhoneNumber } = booking;

  return (
    <div className="booking-card">
      <h3>Booking Information</h3>
       <p><strong>Owner ID:</strong> {userId}</p>
      <p><strong>Start Time:</strong> {new Date(startTime).toLocaleString()}</p>
      <p><strong>End Time:</strong> {new Date(endTime).toLocaleString()}</p>
      <p><strong>Amount Paid:</strong> ₹{amount}</p>
      <p><strong>Payment Status:</strong> {orderStatus}</p>
      <p><strong>Owner's Phone Number:</strong> {ownerPhoneNumber}</p>
    </div>
  );
};

export default LabourBooking;

