import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-gradient-to-r from-orange-50 to-yellow-100 shadow-md py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="text-2xl">🍽️</span>
          <h1 className="text-2xl font-extrabold text-gray-800 tracking-tight">
            Menu Manager
          </h1>
        </div>

        {/* Navigation */}
        <nav className="space-x-6 text-sm sm:text-base font-medium">
          <Link
            to="/"
            className="text-teal-700 hover:text-teal-900 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="/add"
            className="text-orange-600 hover:text-orange-800 transition-colors duration-200"
          >
            Add Dish
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
