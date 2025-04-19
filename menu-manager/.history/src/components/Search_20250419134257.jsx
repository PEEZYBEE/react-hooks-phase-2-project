function Search({ searchTerm, onSearchChange }) {
    return (
      <input
        type="text"
        placeholder="Search dishes..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        style={styles.input}
      />
    );
  }
  
  const styles = {
    input: {
      padding: "8px 12px",
      borderRadius: "4px",
      border: "1px solid #ccc",
      fontSize: "1rem",
      minWidth: "200px",
    },
  };
  
  export default Search;
  