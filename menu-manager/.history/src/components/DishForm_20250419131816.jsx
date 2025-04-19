import { useState, useEffect } from "react";

function DishForm({ initialData = {}, onSubmit }) {
  const [name, setName] = useState(initialData.name || "");
  const [image, setImage] = useState(initialData.image || "");
  const [price, setPrice] = useState(initialData.price || "");

  useEffect(() => {
    setName(initialData.name || "");
    setImage(initialData.image || "");
    setPrice(initialData.price || "");
  }, [initialData]);

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({ name, image, price: parseFloat(price), available: true });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Dish name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        required
      />
      <input
        type="number"
        step="0.01"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <button type="submit">Save</button>
    </form>
  );
}

export default DishForm;
