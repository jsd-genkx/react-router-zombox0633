import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} caseSensitive />
          <Route path="/contact" element={<ContactPage />} caseSensitive />
          <Route path="*" element={<ErrorPage/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
