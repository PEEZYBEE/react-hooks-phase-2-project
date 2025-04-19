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
    <div className="min-h-screen bg-gradient-to-br from-emerald-400 to-teal-700 flex items-center justify-center px-4 py-12">
      <div className="bg-white bg-opacity-90 backdrop-blur-md shadow-2xl rounded-xl p-8 max-w-md w-full">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
          🍲 Add a New Dish
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Dish Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm"
              placeholder="e.g. Chicken Alfredo"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Price</label>
            <input
              type="number"
              step="0.01"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm"
              placeholder="e.g. 12.99"
              required
            />
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={available}
              onChange={(e) => setAvailable(e.target.checked)}
              className="w-5 h-5 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
            />
            <label className="text-gray-700">Available</label>
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 rounded-md transition-all duration-200 shadow-lg"
          >
            Add Dish
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddDishPage;
