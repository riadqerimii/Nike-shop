import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./navbar";
import Products from "./pages/Products/Products";
import ProductId from "./pages/Products/ProductId";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <BrowserRouter>
      <ToastContainer theme="dark" position="bottom-center" autoClose={1500} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Products />} />
        <Route path="/product/:id" element={<ProductId />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
