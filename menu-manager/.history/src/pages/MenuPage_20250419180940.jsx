import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Search from "../components/Search";
import DishList from "../components/DishList";

function MenuPage() {
  const [dishes, setDishes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://menu-manager-backend-r34j.onrender.com/dishes")
      .then((r) => r.json())
      .then(setDishes)
      .catch(() => toast.error("Failed to fetch dishes."));
  }, []);

  const handleDelete = (id) => {
    fetch(`https://menu-manager-backend-r34j.onrender.com/dishes/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setDishes((prev) => prev.filter((dish) => dish.id !== id));
        toast.success("Dish deleted!");
      })
      .catch(() => toast.error("Failed to delete dish."));
  };

  const handleToggleAvailability = (id) => {
    const dish = dishes.find((d) => d.id === id);
    if (!dish) return;

    fetch(`https://menu-manager-backend-r34j.onrender.com/dishes/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ available: !dish.available }),
    })
      .then((r) => r.json())
      .then((updatedDish) => {
        setDishes((prev) =>
          prev.map((d) => (d.id === updatedDish.id ? updatedDish : d))
        );
        toast.info(`Dish marked as ${updatedDish.available ? "available" : "unavailable"}.`);
      })
      .catch(() => toast.error("Failed to update availability."));
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
      <span className="absolute top-10 left-10 text-6xl opacity-10 animate-pulse">🍕</span>

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white bg-opacity-80 backdrop-blur-md p-10 rounded-3xl shadow-lg">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-extrabold text-orange-800 flex justify-center items-center gap-3">
              🍽️ <span>Explore Our Delicious Menu</span>
            </h2>
            <p className="mt-2 text-sm text-gray-600 italic">
              Curated with care, crafted with flavor ✨
            </p>
          </div>

          <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />

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
