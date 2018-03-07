'use strict';
module.exports = (sequelize, DataTypes) => {
  var ComputersPrices = sequelize.define('ComputersPrices', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    computerId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    traderId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    url: {
      type: Sequelize.STRING(512),
      allowNull: false
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return ComputersPrices;
};