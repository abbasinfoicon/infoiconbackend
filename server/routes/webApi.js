import express from "express";
import authController from "../app/controllers/authController.js";
import upload from "../app/middlewares/multerMiddleware.js";

const router = express.Router();

// =======================================================================//
//=================== auth-router ========================================//
//========================================================================//
router.all("/register", upload.single("img"), authController.addUser);

export default router;
