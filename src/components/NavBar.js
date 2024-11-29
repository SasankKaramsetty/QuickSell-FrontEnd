import React, { useState } from "react";
import "../styles/NavBar.css";
import { ReactComponent as DisplayIcon } from "../assets/Display.svg";
import { ReactComponent as DownIcon } from "../assets/down.svg";

const NavBar = ({ onGroupByChange, onSortByChange }) => {
  const [displayDropdownOpen, setDisplayDropdownOpen] = useState(false);
  const [priorityDropdownOpen, setPriorityDropdownOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="dropdown">
        <button
          className="dropdown-button"
          onClick={() => setDisplayDropdownOpen(!displayDropdownOpen)}
        >
          <DisplayIcon />
          Display
        </button>
        {displayDropdownOpen && (
          <div className="dropdown-content">
            <div className="dropdown-item">
              <span>Grouping</span>
              <select
                className="dropdown-select"
                onChange={(e) => onGroupByChange(e.target.value)}
              >
                <option value="status">Status</option>
                <option value="user">User</option>
              </select>
            </div>

            <div className="dropdown-item">
              <span>Ordering</span>
              <select
                className="dropdown-select"
                onChange={(e) => onGroupByChange(e.target.value)}
              >
                <option value="priority">Priority</option>
                <option value="title">Title</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
