function Search({ searchTerm, onSearch }) {
    return (
      <input
        type="text"
        placeholder="Search dishes..."
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
      />
    );
  }
  
  export default Search;
  