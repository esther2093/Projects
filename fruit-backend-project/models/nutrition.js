const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const Fruit = require("./fruit");

const sequelizeInstance = dbConnect.Sequelize;

class Nutrition extends Model {}

Nutrition.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    fruitId: {
      type: DataTypes.INTEGER,
      references: {
        model: Fruit,
        key: "id",
      },
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    calories: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    protein: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    carbohydrates: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    sugar: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    fat: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "nutritions",
    timestamps: true,
    freezeTableName: true,
  }
);

module.exports = Nutrition;
