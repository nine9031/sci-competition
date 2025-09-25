const router = express.Router();
import express from "express";
import authController from "../controllers/auth.controller.js";
//POST http://localhost:500/api/v1/auth/signup
router.post("/signup", authController.signUp);

//GET http://localhost:500/api/v1/auth/verify/:token
router.get("/verify/:token", authController.verifyEmail);

//POST http://localhost:500/api/v1/auth/signup
//router.post("/signin", authController.signIn);

export default router;
