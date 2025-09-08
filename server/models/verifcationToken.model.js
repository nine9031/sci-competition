import { DataTypes, DATE } from "sequelize";
import sequelize from "./db";

const VerificationToken = sequelize.define("verificationToken", {
  id: {
    type: DataTypes.INTEGER,
    alloNull: false,
    primaryKey: true,
  },
  token: {
    type: DataTypes.STRING,
    alloNull: false,
    unique: true,
  },
  
});
