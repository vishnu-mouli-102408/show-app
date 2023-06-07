/* eslint-disable react/prop-types */
import "../public/styles.css";

import { useState } from "react";

const BookingForm = ({ onClose, data }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform form submission logic
    // For example, you can make an API call or perform any other required operations here

    // Simulate booking confirmation
    // Replace this with your actual form submission logic
    setTimeout(() => {
      // Display booking confirmation alert
      alert("Booking confirmed!");

      // Close the form after submission
      onClose();
    }, 2000); // Delay of 2 seconds
  };

  return (
    <div>
      <h1 className="booking-heading">Booking Form</h1>
      <form className="booking-form" onSubmit={handleSubmit}>
        {/* Form fields go here */}
        <h2>Movie Name: {data.show.name}</h2>
        <input
          className="input-field"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          className="input-field"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        {/* ... other form fields ... */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BookingForm;
