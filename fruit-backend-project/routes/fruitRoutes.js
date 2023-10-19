const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

router.get("/", (req, res) => {
  Controllers.fruitController.getAllFruits(req, res);
});

router.get("/random", (req, res) => {
  Controllers.fruitController.getRandomFruit(req, res);
});

router.get("/startsWith/:letter", (req, res) => {
  Controllers.fruitController.getFruitsByFirstLetter(req, res);
});

router.get("/byName/:name", (req, res) => {
  Controllers.fruitController.getFruitByName(req, res);
});

router.get("/:id", (req, res) => {
  Controllers.fruitController.getSpecificFruit(req, res);
});

router.post("/create", (req, res) => {
  Controllers.fruitController.createFruit(req.body, res);
});

router.put("/:id", (req, res) => {
  Controllers.fruitController.updateFruit(req, res);
});

router.delete("/:id", (req, res) => {
  Controllers.fruitController.deleteFruit(req, res);
});

module.exports = router;
