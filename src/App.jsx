import { Routes, Route } from "react-router-dom";

import Layout from "./components/shared/Layout";

import HomePage from "./pages/HomePage";
import PokemonDexPage from "./pages/PokemonDexPage";
import PokemonDetailPage from "./pages/PokemonDetailPage";

import "./App.css";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokemon-dex" element={<PokemonDexPage />} />
        <Route path="/pokemon-dex/:id" element={<PokemonDetailPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
