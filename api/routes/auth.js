import mysqle from "mysql";
import express from "express";
import cors from "cors";
import {login, register, logout} from "../controllers/auth.js";

const router = express.Router();

router.use(express.json());
router.use(cors());

router.post("/login", login);
router.post("/register", register);
router.post("/logout", logout);

export default router;
