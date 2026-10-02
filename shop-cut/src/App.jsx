import { Routes, Route } from "react-router";
import { Home } from "./app_pages/home.jsx";
import Login from "./app_pages/login.jsx";
import Products_expolore from "./app_pages/products_expolore.jsx";
import Gravience from "./app_pages/gravience.jsx";
import Error from "./app_pages/error_page.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="products" element={<Products_expolore />} />
      <Route path="solve" element={<Gravience />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}
export default App;
