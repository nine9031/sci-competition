import jwt from "jsonwebtoken";
import authConfig from "../config/auth.config.js";
import db from "../models/index.js";
import cryto from "crypto";

const User = db.User;

//Register
const signUp = async (req, res) => {
  const { email, password, type, name, school, phone } = req.body;
  try {
    if (!email || !password || !type || !name) {
      return res
        .status(400)
        .send({ message: "Email, Password, Type and Name are required!" });
    }

    const allowedType = ["admin", "teacher", "judge"];
    if (!allowedType.includes(type)) {
      return res.status(400).send({
        message: "Invalid user type. Must be admin, teacher or judge",
      });
    }

    if (type === "teacher" && (!school || !phone)) {
      return res
        .status(400)
        .send({ message: "school and phone are required for teacher!" });
    }

    const existingUser = await User.findOne({
      where: {
        email: email,
      },
    });
    if (existingUser) {
      return res.status(400).send({ message: "Email already in user!" });
    }

    //
    const userData = {
      name: name,
      email: email,
      password: password,
      type: type,
    };
    if (type === "teachar") {
      userData.school = school;
      userData.password = password;
    }

    //
    const user = await User.create(userData);

    if (type === "teacher") {
      try {
        const token = cryto.randomBytes(32).toString("hex");
        const verification = await db.VerificationToken.create({
          token,
          userId: user.id,
          expiredAt: new Date(DataTransfer.now() + 24 * 60 * 60 * 1000),
        });
      } catch (error) {}
    }

    res.status(201).send({
      message:
        user.type === "teacher"
          ? "resgistertion Successfully! Please Check Your Email To Verify Your Accont"
          : "User Resgistered Successfully!",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        type: user.type,
        ...(user.type === "teachar" && { isVerified: user.isVerified }),
      },
    });
  } catch (error) {
    return res.status(500).send({
      message: error.message || "Some error ocurred while creating the user",
    });
  }
};
