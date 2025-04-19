// src/pages/MenuPage.jsx
import { useEffect, useState } from "react";
import Search from "../components/Search";
import DishList from "../components/DishList";

function MenuPage() {
  const [dishes, setDishes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/dishes")
      .then((r) => r.json())
      .then(setDishes);
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/dishes/${id}`, {
      method: "DELETE",
    }).then(() => {
      setDishes((prev) => prev.filter((dish) => dish.id !== id));
    });
  };

  const handleToggleAvailability = (id) => {
    const dishToUpdate = dishes.find((dish) => dish.id === id);
    if (!dishToUpdate) return;

    fetch(`http://localhost:3000/dishes/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        available: !dishToUpdate.available,
      }),
    })
      .then((r) => r.json())
      .then((updated) => {
        setDishes((prev) =>
          prev.map((dish) => (dish.id === updated.id ? updated : dish))
        );
      });
  };

  const filteredDishes = dishes.filter((dish) =>
    dish.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="menu-page">
      <h2>All Dishes</h2>
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <DishList
        dishes={filteredDishes}
        onDelete={handleDelete}
        onToggleAvailability={handleToggleAvailability}
      />
    </div>
  );
}

export default MenuPage;
