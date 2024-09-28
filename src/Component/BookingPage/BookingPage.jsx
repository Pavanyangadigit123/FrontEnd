import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./BookingPage.css";
import axios from "axios";
import { useAuth } from "../../context/auth";

const BookingPage = () => {
  const { state } = useLocation();
  const { labour, user } = state || {}; // Assume `user` is also passed in the state
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const navigate = useNavigate();
  const [auth] = useAuth();
  

  const getCurrentDateTime = () => {
    const now = new Date();
    return now.toISOString().slice(0, 16); // Format as 'YYYY-MM-DDTHH:MM' for datetime-local
  };

  const handleProceedToPay = async () => {
    // Validate the selected start and end times
    if (startTime < getCurrentDateTime() || endTime < startTime) {
      alert("Please select valid start and end times.");
      return;
    }
    console.log("userId:",auth?.userId)

    try {
      const bookingDate = new Date().toISOString();
      const response = await axios.post(
        `http://localhost:9000/api/v1/booking/user-id/${auth?.userId}/labour-id/${labour.id}`,
        {
          startTime,
          endTime,
          bookingDate,
          bookingStatus: "completed",
          amount: labour?.dailyWages,
        },
        {
          headers: {
            Authorization: auth?.token,
          },
        }
      );

      const booking = response.data;
      if (booking) {
        proceedOrder(booking);
      }
    } catch (error) {
      console.error("Error creating booking:", error);
    }
  };

  // const proceedOrder = (order) => {
  //   const options = {
  //     key_id: "rzp_test_t3ROS51DwZEOli",
  //     amount: order.amount,
  //     currency: "INR",
  //     name: "payment_demo",
  //     description: "Course Payment",
  //     order_id: order.razorPayOrderID,
  //     receipt: order.email,
  //     callback_url:
  //       "http://localhost:9000/api/v1/booking/handle-payment-callback",
  //     prefill: {
  //       name: order.name,
  //       email: order.email,
  //       contact: order.phno,
  //     },
  //     theme: {
  //       color: "#3399cc",
  //     },
  //     handler: async function (res) {
  //       order["razorPayOrderID"] = res.razorpay_order_id;
  //       const result =await axios
  //         .post(
  //           `http://localhost:9000/api/v1/booking/handle-payment-callback/${res.razorpay_order_id}`,
  //           {},
  //           {
  //             headers: {
  //               "Content-Type": "application/json",
  //               Authorization: auth?.token,
  //             },
  //           }
  //         )
  //         .catch((err) => {
  //           console.log("Payment verification failed.", err);
  //         });
  //         console.log(result);
  //         window.alert(result.data);
  //         navigate("/");
  //     },
  //     modal: {
  //       ondismiss: () => handleCancelPayment(order?.id),
  //     },
  //   };

  //   const rzp1 = new window.Razorpay(options);
  //   rzp1.open();
  // };

  const proceedOrder = (order) => {
    const options = {
      key_id: "rzp_test_t3ROS51DwZEOli",
      amount: order.amount,
      currency: "INR",
      name: "payment_demo",
      description: "Course Payment",
      order_id: order.razorPayOrderID,
      receipt: order.email,
      callback_url: "http://localhost:9000/api/v1/booking/handle-payment-callback",
      prefill: {
        name: order.name,
        email: order.email,
        contact: order.phno,
      },
      theme: {
        color: "#3399cc",
      },
      handler: async function (res) {
        order["razorPayOrderID"] = res.razorpay_order_id;
        try {
          const result = await axios.post(
            `http://localhost:9000/api/v1/booking/handle-payment-callback/${res.razorpay_order_id}`,
            {},
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: auth?.token,
              },
            }
          );
          console.log(result);
          window.alert(result.data);

          // Navigate to the homepage after successful payment
          setTimeout(() => {
            navigate("/"); // Change "/home" to your desired route
          }, 2000); // Change "/home" to your desired route
        } catch (error) {
          console.log("Payment verification failed.", error);
          window.alert("Payment verification failed.");
        }
      },
      modal: {
        ondismiss: () => handleCancelPayment(order?.id),
      },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  async function handleCancelPayment() {
    try {
      await axios.delete(
        `http://localhost:9000/api/v1/booking/cancel-booking/booking-id/${id}`,
        {
          headers: {
            Authorization: auth?.token,
          },
        }
      );
      window.alert("Payment was cancelled by User");
    } catch (error) {
      window.alert("Internal Server Error");
    }
  }

  return (
    <div className="booking-page-container">
      <h2>
        Booking Details for {labour.firstName} {labour.lastName}
      </h2>
      <div className="booking-form">
        <div className="form-group">
          <label htmlFor="start-time">Start Time:</label>
          <input
            type="datetime-local"
            id="start-time"
            value={startTime}
            min={getCurrentDateTime()} // Set minimum date and time to current time
            onChange={(e) => setStartTime(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="end-time">End Time:</label>
          <input
            type="datetime-local"
            id="end-time"
            value={endTime}
            min={startTime || getCurrentDateTime()} // Set minimum date and time to startTime or current time
            onChange={(e) => setEndTime(e.target.value)}
            required
          />
        </div>
        <button
          className="btn btn-primary"
          onClick={handleProceedToPay}
          disabled={!startTime || !endTime}
        >
          Proceed to Pay
        </button>
      </div>
    </div>
  );
};

export default BookingPage;
