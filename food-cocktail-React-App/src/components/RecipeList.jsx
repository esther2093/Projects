import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";

function RecipeList() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const [allRecipes, setAllRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = [];

      for (const letter of alphabet) {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`
        );
        const result = await response.json();

        if (result.meals) {
          data.push(...result.meals);
        }
      }

      setAllRecipes(data);
      setFilteredRecipes(data);
    };

    fetchData();
  }, [alphabet]);

  const handleSearch = () => {
    const filtered = allRecipes.filter((recipe) => {
      return (
        recipe.strMeal.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.strArea.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.strCategory.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });

    setFilteredRecipes(filtered);
  };

  return (
    <Container component="main" style={{ minWidth: "100vw", minHeight: "90vh" }}>
      <div className="fullRecipeListbody">
      <div className="searchForm">
          <input
            className="searchFormInput"
            type="text"
            placeholder="Search by name, cuisine or category"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="searchButton" onClick={handleSearch}>
            SEARCH
          </button>
        </div>
        <Grid container spacing={2} sx={{ margin: "0", marginBottom: "1em" }}>
          {filteredRecipes.map((recipe) => (
            <Grid item key={recipe.idMeal} xs={12} sm={6} md={3}>
              <Link to={`/recipe/${recipe.idMeal}`}>
                <Card sx={{ width: "90%", height: "100%", padding: "0" }}>
                  <CardContent>
                    <img
                      className="recipeThumbnail"
                      src={recipe.strMealThumb}
                      alt={recipe.strMeal}
                    />
                    <Typography variant="h5" component="div">
                      {recipe.strMeal}
                    </Typography>
                    <Typography variant="body2">
                      Category: {recipe.strCategory}
                    </Typography>
                    <Typography variant="body2">
                      Area: {recipe.strArea}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </div>
    </Container>
  );
}

export default RecipeList;
