import React from "react";
import { useParams } from "react-router-dom";
import { useData } from "../hooks/UseData";
import { Link } from "react-router-dom";
import { Container } from "@mui/material";


function Cocktail() {
  const params = useParams();
  const cocktailData = useData(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params.id}`
  );

  if (
    !cocktailData ||
    !cocktailData.drinks ||
    cocktailData.drinks.length === 0
  ) {
    return <div>Loading...</div>;
  }

  const cocktail = cocktailData.drinks[0];

  return (
    <Container
      component="main"
      style={{ minWidth: "100vw", minHeight: "100vh" }}
    >
      <>
        <div className="cocktailCard">
          <div className="cocktailCardImage">
            <img
              className="cocktailThumbnail"
              src={cocktail.strDrinkThumb}
              alt={cocktail.strMeal}
            />
            <div className="cocktailCardTitle">
              {cocktail.strDrink} {cocktail.strCategory}
            </div>
          </div>
          <div className="cocktailCardInformation">
            <div className="cocktailCardIngredients">
              <div className="cocktailCardIngredientsHeader">Ingredients:</div>
              <div className="cocktailCardGlass">{cocktail.strGlass}</div>
              <ul className="cocktailCardIngredientsList">
                {Array.from({ length: 15 }, (_, i) => {
                  //loop array length 15,  '_' used as a placeholder and we take index from 1 because strIngredients start from 1
                  const ingredient = cocktail[`strIngredient${i + 1}`];
                  const measure = cocktail[`strMeasure${i + 1}`];
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
            <div className="cocktailCardInstructionsHeader">Instructions:</div>
            <div className="cocktailCardInstructionSteps">
              {cocktail.strInstructions}
            </div>
          </div>
        </div>
        <Link to="/cocktail">
          <button className="backButton">BACK TO COCKTAILS</button>
        </Link>
      </>
    </Container>
  );
}

export default Cocktail;
