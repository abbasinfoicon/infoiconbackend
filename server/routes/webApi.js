import express from "express";
import authController from "../app/controllers/authController.js";
import upload from "../app/middlewares/multerMiddleware.js";

const router = express.Router();

// =======================================================================//
//=================== auth-router ========================================//
//========================================================================//
router.use("/register",  upload.single('img'));
router.post("/register", authController.addUser);
router.get("/register", authController.addUser);

export default router;
