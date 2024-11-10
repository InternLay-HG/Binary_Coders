import { Router } from "express";
import  {getCoachDetails,generateCoachAccount} from "../controllers/coach.controller.js"
import {verifyJWT} from "../middleware/auth.middleware.js"
const router=Router()
router.use(verifyJWT)


router.route("/creat").post(generateCoachAccount);
router.route("/getdetails").get(getCoachDetails);

export default router
