import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddDishPage() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [available, setAvailable] = useState(true);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const newDish = {
      name,
      image,
      description,
      price: parseFloat(price),
      available,
    };

    fetch("https://menu-manager-backend-r34j.onrender.com/dishes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newDish),
    })
      .then((res) => res.json())
      .then(() => navigate("/"));
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 to-teal-700 flex items-center justify-center p-6">
      <div className="bg-white bg-opacity-90 backdrop-blur-md rounded-2xl shadow-lg p-10 w-full max-w-5xl flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 bg-white p-8 rounded-xl shadow-md"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            🍲 Add a New Dish
          </h2>

          {/* Name */}
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Dish Name
          </label>
          <input
            type="text"
            placeholder="e.g. Chicken Alfredo"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          />

          {/* Image URL */}
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Image URL
          </label>
          <input
            type="text"
            placeholder="https://example.com/image.jpg"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          />

          {/* Description */}
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            placeholder="Brief description of the dish"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
            rows="3"
            required
          ></textarea>

          {/* Price */}
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Price
          </label>
          <input
            type="number"
            step="0.01"
            placeholder="e.g. 12.99"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          />

          {/* Availability */}
          <label className="inline-flex items-center mb-4">
            <input
              type="checkbox"
              checked={available}
              onChange={(e) => setAvailable(e.target.checked)}
              className="mr-2"
            />
            Available
          </label>

          <button
            type="submit"
            className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded shadow"
          >
            Add Dish
          </button>
        </form>

        {/* Side Content */}
        <div className="hidden md:block flex-1 bg-gray-800 text-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-4">
            💡 Cooking Tip of the Day
          </h3>
          <p className="text-sm leading-relaxed">
            Fresh herbs can make or break a dish — don’t be afraid to toss in a
            handful of chopped parsley or basil at the end for a fresh punch of
            flavor. Your guests will thank you!
          </p>
        </div>
      </div>
    </div>
  );
}

export default AddDishPage;
