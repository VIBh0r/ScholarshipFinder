import "./SearchResults.css";

const SearchResults = () => {
  return (
    <div className="search-results-page">
      <div className="search-header">
        <h1 className="search-title">Search Results</h1>
        <p className="search-query">Showing results for "{searchQuery}"</p>
      </div>

      <div className="filters-container">
        {/* Active filters would appear here */}
        <div className="filter-pill">
          Amount: $1000+
          <button>×</button>
        </div>
      </div>

      <div className="sort-options">
        <select className="sort-select">
          <option>Sort by: Relevance</option>
          <option>Sort by: Deadline</option>
          <option>Sort by: Amount</option>
        </select>
      </div>

      {loading ? (
        <div className="loading-spinner">
          {/* Add your loading spinner here */}
          Loading...
        </div>
      ) : scholarships.length > 0 ? (
        <>
          <p className="results-count">{scholarships.length} scholarships found</p>
          <div className="results-grid">
            {scholarships.map(scholarship => (
              <div className="scholarship-card" key={scholarship.id}>
                <div className="card-header">
                  <h3 className="card-title">{scholarship.title}</h3>
                  <p className="card-provider">{scholarship.provider}</p>
                </div>
                <div className="card-body">
                  <div className="card-detail">
                    <span>💰</span>
                    <span className="card-amount">${scholarship.amount}</span>
                  </div>
                  <div className="card-detail">
                    <span>📅</span>
                    <span>Deadline: {scholarship.deadline}</span>
                  </div>
                  <div className="card-detail">
                    <span>🎓</span>
                    <span>{scholarship.eligibility}</span>
                  </div>
                </div>
                <div className="card-footer">
                  <a href={`/scholarship/${scholarship.id}`} className="view-details">
                    View Details
                  </a>
                  <button className="save-button">
                    ♡
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="pagination">
            <button>Previous</button>
            <button className="active">1</button>
            <button>2</button>
            <button>3</button>
            <button>Next</button>
          </div>
        </>
      ) : (
        <div className="no-results">
          <div className="no-results-icon">🔍</div>
          <h3>No scholarships found</h3>
          <p>Try adjusting your search filters</p>
        </div>
      )}
    </div>
  );
};

export default SearchResults;