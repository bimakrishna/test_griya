'use strict';
const {
  Model
} = require('sequelize');
const Bcrypt = require('../helper/bcrypt')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasOne(models.Biodata)
    }
  };
  User.init({
    username: {
      type: DataTypes.STRING,
      unique: {
        msg: 'Username sudah terdaftar'
      },
      validate: {
        notEmpty: {
          msg: 'username tidak boleh kosong'
        },
        isEmail: {
          msg: 'Username harus berformat email'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'password tidak boleh kosong'
        },
        isAlphanumeric: {
          msg: 'tidak boleh mengandung special character'
        },
        len: {
          args: [5,20],
          msg: 'Password minimal mempunyai 5 karakter'
        }
      }
    },
    repassword: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Password konfirmasi tidak boleh kosong'
        }
      }
    }, 
  }, {
    hooks: {
      beforeCreate(user) {
        user.password = Bcrypt.hash(user.password)
        user.repassword = Bcrypt.hash(user.repassword)
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};