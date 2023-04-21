import express from "express";

import { addUser, SignIn } from "../contro/usecontro.js";



const router = express.Router();
// console.log(router.post("/Help", addUser));


router.post('/Registration', addUser);
router.post('/SignIn', SignIn);

export default router;