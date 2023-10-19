import React from "react";
import { Outlet } from "react-router-dom";

export default function CocktailPage() {
  return (
    <div className="CocktailPage">
      <h1 className="CocktailPageHeader">Cocktails</h1>
      <div className="CocktailCards">
        <Outlet />
      </div>
    </div>
  );
}



