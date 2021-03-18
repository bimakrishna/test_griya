'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Biodata extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Biodata.belongsTo(models.User)
      // define association here
    }
  };
  Biodata.init({
    UserId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          msg: 'User Id tidak ada'
        }
      }
    },
    name: {
      type: DataTypes.STRING,
      validate: {
        max: {
          args: 200,
          msg: 'Maximal 200 karakter'
        }  
      }
    },
    alamat: {
      type: DataTypes.STRING
    },
    gender: {
      type: DataTypes.STRING
    },
    birth_date: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Biodata',
  });
  return Biodata;
};