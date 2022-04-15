'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Event.init({
    name:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    date:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    description:{
      type: DataTypes.STRING,
      allowNull: true,
      
    },
    active:{
      type: DataTypes.BOOLEAN,
      allowNull: false,
      
    },
    reglink:{
      type: DataTypes.STRING,
      allowNull: true,
      
    },
    location:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    } 
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};