// src/pages/AddDishPage.jsx
import { useState } from "react";

function AddDishPage({ onAddDish }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [available, setAvailable] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newDish = {
      name,
      price: parseFloat(price),
      available,
    };
    onAddDish(newDish);
    setName("");
    setPrice("");
    setAvailable(true);
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Add a New Dish</h2>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-6 rounded-lg shadow-md border"
      >
        <div>
          <label className="block mb-1 text-gray-600">Dish Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-green-400 focus:outline-none"
            required
          />
        </div>

        <div>
          <label className="block mb-1 text-gray-600">Price</label>
          <input
            type="number"
            step="0.01"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-green-400 focus:outline-none"
            required
          />
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={available}
            onChange={(e) => setAvailable(e.target.checked)}
            className="h-5 w-5 text-green-600"
          />
          <label className="text-gray-700">Available</label>
        </div>

        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-md transition duration-200"
        >
          Add Dish
        </button>
      </form>
    </div>
  );
}

export default AddDishPage;
