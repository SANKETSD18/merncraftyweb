import express from "express";
import { addUser, ConnectTo } from "../contro/usecontro.js";
import {RegistrationVal, ConnectToVal } from "../middleware/Validation.js";
const router = express.Router();

router.post("/Registration",  addUser);
router.post("/ConnectTo", ConnectToVal, ConnectTo);






export default router;
