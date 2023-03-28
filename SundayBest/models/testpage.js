'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Testpage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Testpage.init({
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    other: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Testpage',
  });
  return Testpage;
};