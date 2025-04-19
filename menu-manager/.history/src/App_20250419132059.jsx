import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MenuPage from "./pages/MenuPage";
import AddDishPage from "./pages/AddDishPage";
import EditDishPage from "./pages/EditDishPage";

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
    </Router>
  );
}

export default App;
