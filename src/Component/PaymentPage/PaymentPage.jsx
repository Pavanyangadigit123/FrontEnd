import React from "react";
import { useLocation } from "react-router-dom";

const PaymentPage = () => {
  const { state } = useLocation();
  const { labour, startTime, endTime } = state;

  return (
    <div>
      <h2>Payment for {labour.firstName} {labour.lastName}</h2>
      <p><strong>Start Time:</strong> {startTime}</p>
      <p><strong>End Time:</strong> {endTime}</p>
      <button className="btn btn-success">Complete Payment</button>
    </div>
  );
};

export default PaymentPage;
