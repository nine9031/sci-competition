const router = express.Router();
import express from "express";
import authController from "../controllers/auth.controller.js";
//POST http://localhost:5000/api/v1/auth/signup
router.post("/signup", authController.signUp);

//GET http://localhost:5000/api/v1/auth/signup
router.get("/sign", authController.signUp);

//POST http://localhost:5000/api/v1/auth/signup
//router.post("/signin", authController.signIn);

// router.get("/verify/:token", authController.verifyEmail);

export default router;
