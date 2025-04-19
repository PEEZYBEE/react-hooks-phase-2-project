// src/pages/MenuPage.jsx
import { useEffect, useState } from "react";
import DishList from "../components/DishList";
import Search from "../components/Search";

function MenuPage() {
  const [dishes, setDishes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/dishes")
      .then((res) => res.json())
      .then((data) => setDishes(data));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:3001/dishes/${id}`, {
      method: "DELETE",
    }).then(() => {
      setDishes((prev) => prev.filter((dish) => dish.id !== id));
    });
  };

  const handleToggleAvailability = (id) => {
    const updatedDish = dishes.find((d) => d.id === id);
    fetch(`http://localhost:3001/dishes/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ available: !updatedDish.available }),
    }).then((res) => res.json())
      .then((updated) => {
        setDishes((prev) =>
          prev.map((dish) => (dish.id === id ? updated : dish))
        );
      });
  };

  const filteredDishes = dishes.filter((dish) =>
    dish.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
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
