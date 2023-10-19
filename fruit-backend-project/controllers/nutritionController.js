"use strict";
const { Op } = require("sequelize");
const Models = require("../models");

const getAllFruitNutritions = (req, res) => {
  Models.Nutrition.findAll({})
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      res.send({ result: 500, data: err.message });
    });
};

const getFruitNutritionByFruitFirstLetter = (req, res) => {
  const { letter } = req.params;
  Models.Nutrition.findAll({ where: { name: { [Op.startsWith]: letter } } })
    .then(function (fruits) {
      res.status(200).json({ result: 200, data: fruits });
    })
    .catch((err) => {
      res.status(500).json({ result: 500, data: err.message });
    });
};

const getFruitNutritionByFruitName = (req, res) => {
  const { name } = req.params;
  Models.Nutrition.findAll({ where: { name: { [Op.like]: `%${name}%` } } })
    .then(function (fruits) {
      res.status(200).json({ result: 200, data: fruits });
    })
    .catch((err) => {
      res.status(500).json({ result: 500, data: err.message });
    });
};

const getSpecificFruitNutrition = (req, res) => {
  Models.Nutrition.findOne({ where: { id: req.params.id } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      res.send({ result: 500, data: err.message });
    });
};

const createNutrition = (data, res) => {
  Models.Nutrition.create(data)
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      res.send({ result: 500, data: err.message });
    });
};

const updateNutrition = (req, res) => {
  Models.Nutrition.update(req.body, { where: { id: req.params.id } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      res.send({ result: 500, data: err.message });
    });
};

const deleteNutrition = (req, res) => {
  Models.Nutrition.destroy({ where: { id: req.params.id } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      res.send({ result: 500, data: err.message });
    });
};

module.exports = {
  getAllFruitNutritions,
  getFruitNutritionByFruitFirstLetter,
  getFruitNutritionByFruitName,
  getSpecificFruitNutrition,
  createNutrition,
  updateNutrition,
  deleteNutrition,
};
