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
      primaryKey: false,
      autoIncrement: true,
    },
    username: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    email: {
      type: Datatypes.STRING,
      allowNull: false,
      unique: true,
    },
    validate: {
      isEmail: true,
    },
    //define a password column
    password: {
      type: Datatypes.STRING,
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
