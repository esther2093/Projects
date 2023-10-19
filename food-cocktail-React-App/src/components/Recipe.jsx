import React from "react";
import { useParams } from "react-router-dom";
import { useData } from "../hooks/UseData";
import { Link } from "react-router-dom";
import { Container } from "@mui/material";

function Recipe() {
  const params = useParams();
  const recipeData = useData(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`
  );

  if (!recipeData || !recipeData.meals || recipeData.meals.length === 0) {
    return <div>Loading...</div>;
  }

  const recipe = recipeData.meals[0];

  return (
    <Container
      component="main"
      style={{ minWidth: "100vw", minHeight: "100vh" }}
    >
      <>
        <div className="recipeCard">
          <div className="recipeCardImage">
            <img
              className="recipeThumbnail"
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
            />
            <div className="recipeCardTitle">
              {recipe.strMeal} {recipe.strCategory}
            </div>
          </div>
          <div className="recipeCardInformation">
            <div className="recipeCardIngredients">
              <div className="recipeCardIngredientsHeader">Ingredients:</div>
              <ul className="recipeCardIngredientsList">
                {Array.from({ length: 20 }, (_, i) => {
                  const ingredient = recipe[`strIngredient${i + 1}`];
                  const measure = recipe[`strMeasure${i + 1}`];
                  if (ingredient) {
                    return (
                      <li key={i}>
                        {measure} {ingredient}
                      </li>
                    );
                  }
                  return null;
                })}
              </ul>
            </div>
            <div className="recipeCardInstructionsHeader">Instructions:</div>
            <div className="recipeCardInstructionSteps">
              {recipe.strInstructions}
            </div>
          </div>
        </div>
        <Link to="/recipe">
          <button className="backButton">BACK TO RECIPES</button>
        </Link>
      </>
    </Container>
  );
}

export default Recipe;
