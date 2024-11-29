import React from "react";
import "../styles/KanbanColumn.css"; 

const KanbanColumn = ({ ticket }) => {
  if (!ticket) {
    console.error("Ticket data is missing.");
    return null;
  }

  return (
    <div className="ticket-card">
      <h4>{ticket.title}</h4>
      <div className="ticket-details">
        {/* Display ticket priority and status */}
        <p>Priority: {ticket.priority}</p>
        <p>Status: {ticket.status}</p>
      </div>
    </div>
  );
};

export default KanbanColumn;
