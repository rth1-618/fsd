import express from "express";
import {
  authUser,
  getAllUsers,
  registerUser,
} from "../controller/userControllers.js";

const router = express.Router();

router.get("/", getAllUsers);
router.route("/register").post(registerUser);
router.post("/login", authUser);

export default router;
