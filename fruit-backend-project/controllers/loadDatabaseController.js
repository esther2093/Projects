"use strict";
const Models = require("../models");
const axios = require("axios");

const loadDatabase = async (req, res) => {
  try {
    const { data: fruitsData } = await axios.get("https://fruityvice.com/api/fruit/all");

    let newFruitId = 0;
    let newNutritionId = 0; 

    for (const fruit of fruitsData) {
      newFruitId++;

      await Models.Fruit.findOrCreate({
        where: { id: newFruitId },
        defaults: {
          id: newFruitId,
          name: fruit.name,
          family: fruit.family,
          genus: fruit.genus,
          order: fruit.order
        },
      });

      newNutritionId++;

      await Models.Nutrition.findOrCreate({
        where: { id: newNutritionId }, 
        defaults: {
          id: newNutritionId,
          fruitId: newFruitId,
          name: fruit.name,
          calories: fruit.nutritions.calories,
          protein: fruit.nutritions.protein,
          carbohydrates: fruit.nutritions.carbohydrates,
          sugar: fruit.nutritions.sugar,
          fat: fruit.nutritions.fat
        },
      });
    }
    
    if (req) {
      res.status(200).json({ message: "Database initialized! :) ", fruitsData });
      console.log("Database initialized! :) ");
    } else {
      console.log("Database initialized! :) ");
    }

  } catch (err) {
    if (req) {
      res.status(500).json({
        message: "Error initializing database! :( ",
        error: err.message,
      });
    } else {
      console.error("Error initializing database! :(", err);
    }
  }
};

module.exports = {
  loadDatabase
};
