import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Homepage from "../pages/Homepage";
import LoginPage from "../pages/LoginPage";
import RecipePage from "../pages/RecipePage";
import RecipeList from "../components/RecipeList";
import Recipe from "../components/Recipe";
import CocktailPage from "../pages/CocktailPage";
import CocktailList from "../components/CocktailList";
import Cocktail from "../components/Cocktail";

function AppRoutes(props) {
  return (
    <Routes>
      <Route index element={<Homepage {...props} />} />
      <Route path="/login" element={<LoginPage {...props} />} />

      <Route 
      path="/recipe"
        element={
          <ProtectedRoute>
        <RecipePage {...props} />
          </ProtectedRoute>
        }
      >
        <Route index element={<RecipeList />} />
        <Route path=":id" element={<Recipe />} />
      </Route>

      <Route
        path="/cocktail"
        element={
          <ProtectedRoute>
            <CocktailPage {...props} />
          </ProtectedRoute>
        }
      >
        <Route index element={<CocktailList />} />
        <Route path=":id" element={<Cocktail />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
