const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

router.get("/", (req, res) => {
  Controllers.nutritionController.getAllFruitNutritions(req, res);
});

router.get("/startsWith/:letter", (req, res) => {
  Controllers.nutritionController.getFruitNutritionByFruitFirstLetter(req, res);
});

router.get("/byName/:name", (req, res) => {
  Controllers.nutritionController.getFruitNutritionByFruitName(req, res);
});

router.get("/:id", (req, res) => {
  Controllers.nutritionController.getSpecificFruitNutrition(req, res);
});

router.post("/create", (req, res) => {
  Controllers.nutritionController.createNutrition(req.body, res);
});

router.put("/:id", (req, res) => {
  Controllers.nutritionController.updateNutrition(req, res);
});

router.delete("/:id", (req, res) => {
  Controllers.nutritionController.deleteNutrition(req, res);
});

module.exports = router;
