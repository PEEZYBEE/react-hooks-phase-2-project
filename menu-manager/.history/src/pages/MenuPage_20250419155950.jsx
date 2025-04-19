import { useEffect, useState } from "react";
import Search from "../components/Search";
import DishList from "../components/DishList";

function MenuPage() {
  const [dishes, setDishes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/dishes")
      .then((r) => r.json())
      .then(setDishes);
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:3001/dishes/${id}`, {
      method: "DELETE",
    }).then(() => {
      setDishes((prev) => prev.filter((dish) => dish.id !== id));
    });
  };

  const handleToggleAvailability = (id) => {
    const dish = dishes.find((d) => d.id === id);
    if (!dish) return;

    fetch(`http://localhost:3001/dishes/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ available: !dish.available }),
    })
      .then((r) => r.json())
      .then((updatedDish) => {
        setDishes((prev) =>
          prev.map((d) => (d.id === updatedDish.id ? updatedDish : d))
        );
      });
  };

  const filteredDishes = dishes.filter((dish) =>
    dish.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section
      className="min-h-screen bg-gradient-to-br from-yellow-100 via-red-100 to-orange-100 py-12 px-4 relative"
      style={{
        backgroundImage: "url('https://www.transparenttextures.com/patterns/food.png')",
      }}
    >
      {/* Optional fun floating emoji - can be removed or duplicated */}
      <span className="absolute top-10 left-10 text-6xl opacity-10 animate-pulse">🍕</span>

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white bg-opacity-80 backdrop-blur-md p-10 rounded-3xl shadow-lg">
          {/* Header Banner */}
          <div className="text-center mb-10">
            <h2 className="text-4xl font-extrabold text-orange-800 flex justify-center items-center gap-3">
              🍽️ <span>Explore Our Delicious Menu</span>
            </h2>
            <p className="mt-2 text-sm text-gray-600 italic">
              Curated with care, crafted with flavor ✨
            </p>
          </div>

          {/* Search Input */}
          <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />

          {/* Dish List */}
          <DishList
            dishes={filteredDishes}
            onDelete={handleDelete}
            onToggleAvailability={handleToggleAvailability}
          />
        </div>
      </div>
    </section>
  );
}

export default MenuPage;
