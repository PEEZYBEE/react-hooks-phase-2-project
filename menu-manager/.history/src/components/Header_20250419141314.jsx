import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          🍽️ Menu Manager
        </h1>
        <nav className="space-x-4">
          <Link to="/" className="text-teal-700 hover:underline">
            Home
          </Link>
          <Link to="/add" className="text-orange-600 hover:underline">
            Add Dish
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
