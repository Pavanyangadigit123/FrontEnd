import Razorpay from "razorpay";
import React from "react";

const Order = () => {
  async function createOrder() {
    console.log("order creation started");
    const response = await fetch("http://localhost:9000/create-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "raj",
        email: "rajnk@gmail.com",
        phno: "8660202938",
        course: "Java",
        amount: 10000,
        currency: "INR",
      }),
    });

    const order = await response.json();
    console.log("order creation completed", order);
    if (order) {
      proceedOrder(order);
    }
  }

  const proceedOrder = (order) => {
    const options = {
      //pass order details
      key_id: "rzp_test_t3ROS51DwZEOli",
      amount: order.amount,
      currency: "INR",
      name: "payment_demo",
      description: "Course Payment",
      order_id: order.razorPayOrderID,
      receipt: order.email,
      callback_url: "http://localhost:9000/handle-payment-callback",
      prefill: {
        name: order.name,
        email: order.email,
        contact: order.phno,
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
    e.preventDefault();
  };
  return (
    <div>
      <button onClick={createOrder}>place Order</button>
    </div>
  );
};

export default Order;
