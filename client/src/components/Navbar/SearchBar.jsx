import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchBar.css"; // Create this CSS file for styling

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    amount: "",
    deadline: "",
    eligibility: ""
  });
  const [showFilters, setShowFilters] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    
    // Construct query string with filters
    const queryParams = new URLSearchParams();
    queryParams.append("q", searchTerm);
    
    if (filters.amount) queryParams.append("amount", filters.amount);
    if (filters.deadline) queryParams.append("deadline", filters.deadline);
    if (filters.eligibility) queryParams.append("eligibility", filters.eligibility);
    
    navigate(`/search?${queryParams.toString()}`);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="search-bar-container">
      <form onSubmit={handleSearch} className="search-form">
        <div className="search-input-group">
          <input
            type="text"
            placeholder="Search scholarships..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-button">
            <i className="fas fa-search"></i> Search
          </button>
          <button 
            type="button" 
            className="filter-toggle"
            onClick={() => setShowFilters(!showFilters)}
          >
            {showFilters ? "Hide Filters" : "Show Filters"}
          </button>
        </div>

        {showFilters && (
          <div className="filter-section">
            <div className="filter-group">
              <label>Minimum Amount ($):</label>
              <input
                type="number"
                name="amount"
                value={filters.amount}
                onChange={handleFilterChange}
                min="0"
                placeholder="Any amount"
              />
            </div>

            <div className="filter-group">
              <label>Deadline Before:</label>
              <input
                type="date"
                name="deadline"
                value={filters.deadline}
                onChange={handleFilterChange}
              />
            </div>

            <div className="filter-group">
              <label>Eligibility:</label>
              <select
                name="eligibility"
                value={filters.eligibility}
                onChange={handleFilterChange}
              >
                <option value="">Any</option>
                <option value="high_school">High School Students</option>
                <option value="undergraduate">Undergraduate</option>
                <option value="graduate">Graduate</option>
                <option value="international">International Students</option>
                <option value="minority">Minority Groups</option>
              </select>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default SearchBar;