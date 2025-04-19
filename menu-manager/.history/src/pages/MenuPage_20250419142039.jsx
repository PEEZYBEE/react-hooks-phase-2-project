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
   
  );
}

export default MenuPage;
