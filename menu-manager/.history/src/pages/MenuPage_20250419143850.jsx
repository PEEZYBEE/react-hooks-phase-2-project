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
    <section className="bg-gray-100 min-h-screen py-10 px-4">
    <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">

      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">All Dishes</h2>
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <DishList
        dishes={filteredDishes}
        onDelete={handleDelete}
        onToggleAvailability={handleToggleAvailability}
      />
    </div>
  </section>
  
      );
      
}

export default MenuPage;
