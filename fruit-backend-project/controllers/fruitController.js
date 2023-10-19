"use strict";
const { Op } = require("sequelize");
const Models = require("../models");

const getAllFruits = (req, res) => {
  Models.Fruit.findAll({})
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      res.send({ result: 500, data: err.message });
    });
};

const getRandomFruit = (req, res) => {
  let randomFruitId = Math.floor(Math.random() * 44);
  Models.Fruit.findOne({ where: { id: randomFruitId } })
    .then(function (randomFruit) {
      res.send({ result: 200, data: randomFruit });
    })
    .catch((err) => {
      res.send({ result: 500, data: err.message });
    });
};

const getFruitsByFirstLetter = (req, res) => {
  const { letter } = req.params;
  Models.Fruit.findAll({ where: { name: { [Op.startsWith]: letter } } })
    .then(function (fruits) {
      res.status(200).json({ result: 200, data: fruits });
    })
    .catch((err) => {
      res.status(500).json({ result: 500, data: err.message });
    });
};

const getFruitByName = (req, res) => {
  const { name } = req.params;
  Models.Fruit.findAll({ where: { name: { [Op.like]: `%${name}%` } } })
    .then(function (fruits) {
      res.status(200).json({ result: 200, data: fruits });
    })
    .catch((err) => {
      res.status(500).json({ result: 500, data: err.message });
    });
};

const getSpecificFruit = (req, res) => {
  Models.Fruit.findOne({ where: { id: req.params.id } })
    .then(function (specificFruit) {
      res.send({ result: 200, data: specificFruit });
    })
    .catch((err) => {
      res.send({ result: 500, data: err.message });
    });
};

const createFruit = (data, res) => {
  Models.Fruit.create(data)
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      res.send({ result: 500, data: err.message });
    });
};

const updateFruit = (req, res) => {
  Models.Fruit.update(req.body, { where: { id: req.params.id } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      res.send({ result: 500, data: err.message });
    });
};

const deleteFruit = (req, res) => {
  Models.Fruit.destroy({ where: { id: req.params.id } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      res.send({ result: 500, data: err.message });
    });
};

module.exports = {
  getAllFruits,
  getRandomFruit,
  getFruitsByFirstLetter,
  getFruitByName,
  getSpecificFruit,
  createFruit,
  updateFruit,
  deleteFruit,
};
