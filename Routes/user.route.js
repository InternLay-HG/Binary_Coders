import { Router } from "express";
import {getcurrentuser, loginuser, RegisterUser, verifyEmail} from "../controllers/user.controller.js";
import {verifyJWT} from "../middleware/auth.middleware.js"
const router=Router()
// Route for Google OAuth Login




router.route("/register").post(RegisterUser);
router.route("/verify").post(verifyEmail);
router.route("/login").post(loginuser);
router.route("/getuser").get(verifyJWT,getcurrentuser)
export default router
