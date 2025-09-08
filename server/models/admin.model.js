import { DataTypes } from "sequelize";
import User from "./user.model";

const Admin = User.init(
    {},
    {
        scopes: {
            defaultS
        }
    }
)