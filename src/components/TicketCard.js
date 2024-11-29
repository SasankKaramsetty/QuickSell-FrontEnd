import React from "react";
import "../styles/TicketCard.css";

const TicketCard = ({ ticket }) => {
  const priorityLabels = ["No Priority", "Low", "Medium", "High", "Urgent"];

  return (
    <div className={`ticket-card priority-${ticket.priority}`}>
      <h3>{ticket.title}</h3>
      <p>{`Priority: ${priorityLabels[ticket.priority]}`}</p>
      <p>{`Assigned to: ${ticket.userId}`}</p>
      <p>{`Status: ${ticket.status}`}</p>
    </div>
  );
};

export default TicketCard;
