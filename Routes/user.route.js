import { Router } from "express";
import {loginuser, RegisterUser, verifyEmail} from "../controllers/user.controller.js"
const router=Router()
// Route for Google OAuth Login




router.route("/register").post(RegisterUser);
router.route("/verify").post(verifyEmail);
router.route("/login").post(loginuser);
export default router
