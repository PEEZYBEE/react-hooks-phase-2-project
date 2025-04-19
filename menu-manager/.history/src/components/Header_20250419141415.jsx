import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-white p-4 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Title */}
        <h1 className="text-2xl font-extrabold text-gray-800 flex items-center gap-2">
          🍽️ <span>Menu Manager</span>
        </h1>

        {/* Nav Links */}
        <nav className="space-x-4">
          <Link to="/" className="text-teal-700 font-medium hover:underline">
            Home
          </Link>
          <Link to="/add" className="text-orange-600 font-medium hover:underline">
            Add Dish
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
