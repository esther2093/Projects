import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";

function CocktailList() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const [allCocktails, setAllCocktails] = useState([]);
  const [filteredCocktails, setFilteredCocktails] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = [];

      for (const letter of alphabet) {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`
        );
        const result = await response.json();

        if (result.drinks) {
          data.push(...result.drinks);
        }
      }

      setAllCocktails(data);
      setFilteredCocktails(data);
    };

    fetchData();
  }, [alphabet]);

  const handleSearch = () => {
    const filtered = allCocktails.filter((cocktail) => {
      return (
        cocktail.strDrink.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cocktail.strCategory.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cocktail.strAlcoholic.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cocktail.strGlass.toLowerCase().includes(searchTerm.toLowerCase()) 
      );
    });

    setFilteredCocktails(filtered);
  };

  return (
    <Container component="main" style={{ minWidth: "100vw", minHeight: "100vh" }}>
      <div className="fullCocktailListbody">
      <div className="searchForm">
          <input
            className="searchFormInput"
            type="text"
            placeholder="Search by name, category or alcoholic content"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="searchButton" onClick={handleSearch}>
            SEARCH
          </button>
        </div>
        <Grid container spacing={2} sx={{ margin: "0", marginBottom: "1em" }}>
          {filteredCocktails.map((cocktail) => (
            <Grid item key={cocktail.idDrink} xs={12} sm={6} md={3}>
              <Link to={`/cocktail/${cocktail.idDrink}`}>
                <Card sx={{ width: "90%", height: "100%", padding: "0" }}>
                  <CardContent>
                    <img
                      className="cocktailThumbnail"
                      src={cocktail.strDrinkThumb}
                      alt={cocktail.strDrink}
                    />
                    <Typography variant="h5" component="div">
                      {cocktail.strDrink}
                    </Typography>
                    <Typography variant="body2">
                      Category: {cocktail.strCategory}
                    </Typography>
                    <Typography variant="body2">
                      Glass: {cocktail.strGlass}
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

export default CocktailList;
