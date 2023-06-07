/* eslint-disable react/prop-types */
import "../public/styles.css";
import { useState } from "react";
import BookingForm from "./BookingForm";

const Summary = ({ data }) => {
  const [isFormOpen, setFormOpen] = useState(false);

  const handleBookTicket = () => {
    setFormOpen(true);
  };

  const handleFormClose = () => {
    setFormOpen(false);
  };

  const String = data.show.summary;
  const parser = new DOMParser();
  const parsedDocument = parser.parseFromString(String, "text/html");
  const textContent = parsedDocument.body.textContent;
  return (
    <div>
      <h1 className="summary-heading">Summary</h1>
      <div className="card my-5">
        <div className="card-body">{textContent}</div>
      </div>

      {!isFormOpen ? (
        <button onClick={handleBookTicket}>Book Ticket</button>
      ) : (
        <BookingForm onClose={handleFormClose} data={data} />
      )}
    </div>
  );
};

export default Summary;
