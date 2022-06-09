const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
// create our User model
class User extends Model {}

// define table columns and configuration
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    //define a password column
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        // this means the password must be at least four characterslong
        len: [4],
      },
    },
  },

  {
    sequelize,
    timestamps: false,
    freezeTableNAme: true,
    underscored: true,
    modelName: "user",
  }
);

module.exports = User;
