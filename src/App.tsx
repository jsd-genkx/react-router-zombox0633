import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ErrorPage from "./pages/ErrorPage";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} caseSensitive />
          <Route path="contact" element={<ContactPage />} caseSensitive />
          <Route path="product" element={<ProductList />} caseSensitive />
          <Route path="product/:id" element={<ProductDetail />} caseSensitive />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
