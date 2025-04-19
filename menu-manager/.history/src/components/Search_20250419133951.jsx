// src/components/Search.jsx
function Search({ searchTerm, onSearch }) {
    return (
      <div style={searchStyle}>
        <input
          type="text"
          placeholder="Search dishes..."
          value={searchTerm}
          onChange={(e) => onSearch(e.target.value)}
          style={inputStyle}
        />
      </div>
    );
  }
  
  export default Search;
  
  const searchStyle = {
    margin: "20px auto",
    textAlign: "center",
  };
  
  const inputStyle = {
    padding: "8px",
    width: "250px",
    fontSize: "1rem",
    borderRadius: "4px",
    border: "1px solid #aaa",
  };
  