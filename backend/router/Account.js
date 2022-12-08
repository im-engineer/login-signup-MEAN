import express from "express";
const router = express.Router();
import {upload} from "../middleware.js/Upload"
import {accountCreate} from "../controller/Account"

router.post("/create/account",upload.single("image"),accountCreate)

export default router;