import express from "express";
const router = express.Router();
import {upload} from "../middleware/Upload"
import {verifyUser} from "../middleware/verifyOTP"
import {accountCreate,login,verifyOTP} from "../controller/Account"

router.post("/create/account",upload.single("image"),accountCreate);
router.post("/verify/otp",verifyOTP)
router.post("/login",[verifyUser],login)

export default router;