const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");

const sequelizeInstance = dbConnect.Sequelize;

class Fruit extends Model {}

Fruit.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    family: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    genus: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    order: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "fruits",
    timestamps: true,
    freezeTableName: true
  }
);

module.exports = Fruit;
