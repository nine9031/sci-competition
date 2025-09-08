import activityController from "../controllers/activity.controller.js";
import express from "express";
import AuthMiddleware from "../middleware/authJwt.js";

const router = express.Router();
//POST http://localhost:5000/api/v1/activities
router.post(
  "/",
  [AuthMiddleware.verifyToken, AuthMiddleware.isManager],
  activityController.create
);
//GET http://localhost:5000/api/v1/activities
router.get("/", activityController.findAll);
//GET http://localhost:5000/api/v1/activities/1
router.get("/:id", activityController.findById);
//PUT http://localhost:5000/api/v1/activities/1
router.put(
  "/:id",
  [AuthMiddleware.verifyToken, AuthMiddleware.isManager],
  activityController.updateById
);
//DELETE http://localhost:5000/api/v1/activities/1
router.delete(
  "/:id",
  [AuthMiddleware.verifyToken, AuthMiddleware.isManager],
  activityController.deleteById
);
//GET http://localhost:5000/api/v1/activities/search?name=abc&type=def&level=ghi&status=jkl
router.get("/search", activityController.searchActivity);

export default router;
