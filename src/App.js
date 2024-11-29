import React, { useEffect, useState } from "react";
import axios from "axios";
import KanbanBoard from "./components/KanbanBoard";
import NavBar from "./components/NavBar"; 
import "./styles/App.css"; 

const App = () => {
  const [data, setData] = useState(null); 
  const [groupBy, setGroupBy] = useState("status"); 
  const [sortBy, setSortBy] = useState("priority"); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.quicksell.co/v1/internal/frontend-assignment"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Fetch data once on component mount

  const handleGroupByChange = (value) => setGroupBy(value); // Grouping handler
  const handleSortByChange = (value) => setSortBy(value); // Sorting handler

  if (!data) return <div>Loading...</div>; // Show loading state until data is fetched

  return (
    <div>
      <NavBar
        onGroupByChange={handleGroupByChange}
        onSortByChange={handleSortByChange}
      />
      <KanbanBoard groupBy={groupBy} sortBy={sortBy} data={data} />
    </div>
  );
};

export default App;
