import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DishForm from "../components/DishForm";

function EditDishPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [dish, setDish] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/dishes/${id}`)
      .then((res) => res.json())
      .then(setDish);
  }, [id]);

  function handleUpdate(updatedDish) {
    fetch(`https://menu-manager-backend-r34j.onrender.com/dishes/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedDish),
    })
      .then((res) => res.json())
      .then(() => navigate("/"));
  }

  if (!dish) return <p>Loading...</p>;

  return (
    <div>
      <h2>Edit Dish</h2>
      <DishForm initialData={dish} onSubmit={handleUpdate} />
    </div>
  );
}

export default EditDishPage;
