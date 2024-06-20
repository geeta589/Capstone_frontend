import { Route, Routes } from "react-router-dom";

import { BrowserRouter } from "react-router-dom";
import "./App.css";
import  Login from './pages/Login/Login.jsx'
import RegistrationPage from './pages/RegistrationPage/RegistrationPage.jsx'
import LandingPage from "./pages/LandingPage/LandingPage.jsx"
import  RecipeSearch  from "./pages/RecipeSearch/index.jsx";
import  NavBar  from "./components/NavBar/index.jsx";
import DisplayRecipe from "./pages/DisplayRecipe/index.jsx"

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Registration" element={<RegistrationPage />} />
        <Route path="/LandingPage" element={<LandingPage />} />
        <Route path="/RecipeSearch" element={<RecipeSearch />} />
        <Route path="/DisplayRecipe" element={<DisplayRecipe />} />
      </Routes>
    </>
  );
}

export default App;
