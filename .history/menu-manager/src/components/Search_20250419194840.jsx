function Search({ searchTerm, onSearchChange }) {
    return (
      <div className="flex items-center justify-between px-6 py-4 bg-gray-50">
        <h2 className="text-2xl font-semibold text-gray-700">Browse Dishes</h2>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search dishes..."
          className="w-64 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
        />
      </div>
    );
  }
  
  export default Search;
  