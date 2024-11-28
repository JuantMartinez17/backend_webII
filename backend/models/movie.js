'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
    }
  }
  Movie.init({
    title: DataTypes.STRING,
    year: DataTypes.INTEGER,
    director: DataTypes.STRING,
    duration: DataTypes.INTEGER,
    poster: DataTypes.STRING,
    genre: DataTypes.JSON,
    rate: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Movie'
  })
  return Movie
}