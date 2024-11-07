import { Router } from "express";
import {getcurrentuser, loginuser, logout, RegisterUser} from "../controllers/user.controller.js";
import {verifyJWT} from "../middleware/auth.middleware.js"
const router=Router()
// Route for Google OAuth Login




router.route("/register").post(RegisterUser);
// router.route("/verify").post(verifyEmail);
router.route("/login").post(loginuser);
router.route("/getuser").get(verifyJWT,getcurrentuser)
router.route("/logout").get(verifyJWT,logout);

export default router
