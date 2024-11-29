// import React, { useState } from "react";
// import KanbanColumn from "../components/KanbanColumn.js"; 
// import "../styles/KanbanBoard.css";

// const KanbanBoard = ({ groupBy, sortBy, data }) => {
  
//   if (!data || !data.tickets || !data.users) {
//     return <div>Error: Data is not available</div>;
//   }

//   const { tickets, users } = data;

//   const userMap = users.reduce((acc, user) => {
//     acc[user.id] = user.name;
//     return acc;
//   }, {});

//   const getGroupedTickets = () => {
//     const grouped = tickets.reduce((acc, ticket) => {
//       let key;

//       if (groupBy === "user") {
//         key = userMap[ticket.userId] || "Unassigned"; 
//       } else if (groupBy === "status") {
//         key = ticket.status || "Unassigned"; 
//       } else if (groupBy === "priority") {
//         key = ticket.priority || "Unassigned"; 
//       }
//       if (!acc[key]) acc[key] = [];
//       acc[key].push(ticket);
//       return acc;
//     }, {});
//     return grouped;
//   };

//   const groupedTickets = getGroupedTickets();

//   const prioritySortedGroups = groupBy === "priority" ? ["4", "3", "2", "1"] : Object.keys(groupedTickets);

//   return (
//     <div className="kanban-board">
//       {prioritySortedGroups.map((group) => (
//         <div key={group} className="kanban-column">
//           <h3 className="column-title">{group}</h3>
//           <div className="ticket-cards">
//             {(groupedTickets[group] || []).map((ticket) => (
//               <KanbanColumn key={ticket.id} ticket={ticket} />
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };


// export default KanbanBoard;

import React from "react";
import KanbanColumn from "../components/KanbanColumn.js"; 
import "../styles/KanbanBoard.css";

const KanbanBoard = ({ groupBy, sortBy, data }) => {
  
  // Error handling in case of missing or invalid data
  if (!data || !data.tickets || !data.users) {
    return <div>Error: Data is not available</div>;
  }

  const { tickets, users } = data;

  // Map user IDs to their names for easier grouping by user
  const userMap = users.reduce((acc, user) => {
    acc[user.id] = user.name;
    return acc;
  }, {});

  // Group tickets based on the selected grouping option (user, status, or priority)
  const getGroupedTickets = () => {
    const grouped = tickets.reduce((acc, ticket) => {
      let key;

      if (groupBy === "user") {
        key = userMap[ticket.userId] || "Unassigned"; // Group by user
      } else if (groupBy === "status") {
        key = ticket.status || "Unassigned"; // Group by status
      } else if (groupBy === "priority") {
        key = ticket.priority || "Unassigned"; // Group by priority
      }

      // Initialize the group if it doesn't exist, then push the ticket to the group
      if (!acc[key]) acc[key] = [];
      acc[key].push(ticket);

      return acc;
    }, {});

    return grouped;
  };

  // Grouped tickets based on the selected grouping
  const groupedTickets = getGroupedTickets();

  // If grouping by priority, we want to sort the groups in the order 4, 3, 2, 1
  const prioritySortedGroups = groupBy === "priority" ? ["4", "3", "2", "1"] : Object.keys(groupedTickets);

  return (
    <div className="kanban-board">
      {/* Loop over the sorted groups (either priority or the default grouping) */}
      {prioritySortedGroups.map((group) => (
        <div key={group} className="kanban-column">
          <h3 className="column-title">{group}</h3>
          <div className="ticket-cards">
            {/* Render KanbanColumn for each ticket in the group */}
            {(groupedTickets[group] || []).map((ticket) => (
              <KanbanColumn key={ticket.id} ticket={ticket} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;
