import express from "express";
const app = express();
import dotenv from "dotenv";
import authRouter from "./routers/auth.router.js";
dotenv.config();
const PORT = process.env.PORT || 3000;
import cors from "cors";
import activityRouter from "./routers/activity.router.js";
app.use(
  cors({
    origin: ["http://localhost:5173", "127.0.0.1:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization", "x-access-token"],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import db from "./models/index.js";

const role = db.Role;

const innitRole = () => {
  role.create({ id: 1, name: "user" });
  role.create({ id: 2, name: "moderator" });
  role.create({ id: 3, name: "admin" });
};

// db.sequelize.sync({ force: false }).then(() => {
//   innitRole();
//   console.log("Drop and Sync");
// });

app.get("/", (req, res) => {
  res.send("Sci Competition Restful API");
});

//use router
app.use("/api/v1/activitiy", require(activityRouter).default);
app.use("/api/v1/auth", authRouter);
s;
app.listen(PORT, () => {
  console.log("Listening to http://localhost:" + PORT);
});
