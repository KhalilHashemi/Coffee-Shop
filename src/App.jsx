import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CakesPage from "./pages/CakesPage";
import CoffeesPage from "./pages/CoffeesPage";
import DrinksPage from "./pages/DrinksPage";
import AboutUsPage from "./pages/AboutUsPage";
import PageNotFound from "./pages/404";
import Layout from "./layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cakes" element={<CakesPage />} />
        <Route path="/coffees" element={<CoffeesPage />} />
        <Route path="/drinks" element={<DrinksPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
