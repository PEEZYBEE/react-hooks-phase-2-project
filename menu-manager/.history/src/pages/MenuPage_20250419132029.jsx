import { useEffect, useState } from "react";
import DishList from "../components/DishList";
import Search from "../components/Search";

function MenuPage() {
  const [dishes, setDishes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/dishes")
      .then((res) => res.json())
      .then(setDishes);
  }, []);

  function handleDelete(id) {
    fetch(`http://localhost:3001/dishes/${id}`, { method: "DELETE" });
    setDishes(dishes.filter((dish) => dish.id !== id));
  }

  function handleToggleAvailability(id) {
    const updatedDish = dishes.find((dish) => dish.id === id);
    fetch(`http://localhost:3001/dishes/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ available: !updatedDish.available }),
    }).then(() =>
      setDishes((prev) =>
        prev.map((dish) =>
          dish.id === id ? { ...dish, available: !dish.available } : dish
        )
      )
    );
  }

  const filtered = dishes.filter((dish) =>
    dish.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Search searchTerm={searchTerm} onSearch={setSearchTerm} />
      <DishList
        dishes={filtered}
        onDelete={handleDelete}
        onToggleAvailability={handleToggleAvailability}
      />
    </div>
  );
}

export default MenuPage;
