function Search({ searchTerm, onSearchChange }) {
    return (
      <input
        type="text"
        placeholder="Search dishes..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    );
  }
  
  export default Search;
  