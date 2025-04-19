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

  function handleDelete(id) {
    fetch(`http://localhost:3000/dishes/${id}`, {
      method: "DELETE",
    });
    setDishes(dishes.filter((dish) => dish.id !== id));
  }

  function handleToggleAvailability(id) {
    const updatedDishes = dishes.map((dish) =>
      dish.id === id ? { ...dish, available: !dish.available } : dish
    );

    const updatedDish = updatedDishes.find((dish) => dish.id === id);

    fetch(`http://localhost:3000/dishes/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ available: updatedDish.available }),
    });

    setDishes(updatedDishes);
  }

  const filteredDishes = dishes.filter((dish) =>
    dish.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section>
      <div style={styles.topBar}>
        <h2 style={styles.title}>All Dishes</h2>
        <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      </div>
      <DishList
        dishes={filteredDishes}
        onDelete={handleDelete}
        onToggleAvailability={handleToggleAvailability}
      />
    </section>
  );
}

const styles = {
  topBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "20px 0",
    padding: "0 1rem",
    flexWrap: "wrap",
  },
  title: {
    fontSize: "1.8rem",
    fontWeight: "bold",
    margin: "10px 0",
  },
};

export default MenuPage;
