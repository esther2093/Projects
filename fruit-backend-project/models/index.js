"use strict";
const Fruit = require("./fruit"); 
const Nutrition = require("./nutrition"); 

async function init() {
  await Fruit.sync();
  await Nutrition.sync();
}
init();

module.exports = {
  Fruit,
  Nutrition
};
