import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MenuPage from "./pages/MenuPage";
import AddDishPage from "./pages/AddDishPage";
import EditDishPage from "./pages/EditDishPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<MenuPage />} />
          <Route path="/add" element={<AddDishPage />} />
          <Route path="/edit/:id" element={<EditDishPage />} />
        </Routes>
      </main>

      {/* Toast Container for notifications */}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </Router>
  );
}

export default App;
