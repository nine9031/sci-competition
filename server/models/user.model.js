import { DataTypes } from "sequelize";
import sequelize from "./db.js";
import becrypt from "bcryptjs";
const User = sequelize.define(
  "user",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
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
  },
  {
    hook: {
      beforeCreate: async (user) => {
        if (user.password) {
          const salt = await becrypt.genSalt(10);
          user.password = await becrypt.hash(user.password, salt);
        }
      },
      beforeUpdate: async (user) => {
        if (user.password) {
          const salt = await becrypt.genSalt(10);
          user.password = await becrypt.hash(user.password, salt);
        }
      },
    },
  }
);

User.prototype.comparePassword = async function (candidatePassword) {
  return await becrypt.compare(candidatePassword, this.password);
};

User.sync({ force: false })
  .then(() => {
    console.log("Table created or already existed");
  })
  .catch((error) => {
    console.log("Error creating table", error);
  });
export default User;
