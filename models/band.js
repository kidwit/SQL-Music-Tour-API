'use strict';
const { Model } = require('sequelize');

console.log('Loading Band model');

module.exports = (sequelize, DataTypes) => {
  class Band extends Model {
    static associate(models) {
      // define association here
    }
  }
  Band.init({
    band_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    genre: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    available_start_time: {
        type: DataTypes.DATE,
        allowNull: false
    },
    end_time: {
        type: DataTypes.DATE,
        allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Band',
    tableName: 'bands',
    timestamps: false
  });

  console.log('Band model loaded');
  return Band;
};
