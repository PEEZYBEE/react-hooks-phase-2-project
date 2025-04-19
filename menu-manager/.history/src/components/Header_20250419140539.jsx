// src/components/Header.jsx
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-gray-300 bg-white shadow-sm">
      <h1 className="text-3xl font-bold text-gray-800">🍽️ Menu Manager</h1>
      <nav className="space-x-4">
        <Link
          to="/"
          className="text--600 hover:text-blue-800 transition duration-200"
        >
          Home
        </Link>
        <Link
          to="/add"
          className="text-orange-600 hover:text-blue-800 transition duration-200"
        >
          Add Dish
        </Link>
      </nav>
    </header>
  );
}

export default Header;
