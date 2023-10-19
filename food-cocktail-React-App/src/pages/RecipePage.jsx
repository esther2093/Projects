import React from "react";
import { Outlet } from "react-router-dom";

export default function RecipePage() {
  return (
    <div className="RecipePage">
      <h1 className="RecipePageHeader">Recipes</h1>
      <div className="RecipeCards">
        <Outlet />
      </div>
    </div>
  );
}
