import { Datatype } from "sequelize";
import User from "./user.model";

const Teacher = User.init(
  {
    school: {
      type: Datatype.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    scopes: {
      defaultScope: {
        where: {
          type: "teacher",
        },
      },
    },
  },
  {
    beforeCreate: (teacher) => {
      teacher.type = "teacher";
    },
  }
);

export default Teacher;