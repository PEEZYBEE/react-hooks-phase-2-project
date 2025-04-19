import { useNavigate } from "react-router-dom";
import DishForm from "../components/DishForm";

function AddDishPage() {
  const navigate = useNavigate();

  function handleAdd(newDish) {
    fetch("http://localhost:3001/dishes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newDish),
    })
      .then((res) => res.json())
      .then(() => navigate("/"));
  }

  return (
    <div>
      <h2>Add New Dish</h2>
      <DishForm onSubmit={handleAdd} />
    </div>
  );
}

export default AddDishPage;
