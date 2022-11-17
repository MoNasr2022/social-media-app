import mysqle from "mysql";
import express from "express";
import cors from "cors";
import {} from "../controllers/like.js";

const router = express.Router();

router.use(express.json());
router.use(cors());

router.get("");

export default router;
