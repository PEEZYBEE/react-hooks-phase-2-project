import { useState, useEffect } from "react";
import { toast } from "react-toastify";

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
    if (!name || !image || !price) {
      toast.error("Please fill out all fields.");
      return;
    }

    onSubmit({ name, image, price: parseFloat(price), available: true });
    toast.success("Dish saved successfully!");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Dish name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="number"
        step="0.01"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="w-full p-2 border rounded"
        required
      />
      <button
        type="submit"
        className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
      >
        Save
      </button>
    </form>
  );
}

export default DishForm;
