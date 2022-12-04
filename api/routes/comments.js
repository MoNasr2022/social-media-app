import mysqle from "mysql";
import express from "express";
import cors from "cors";
import { getComments, addComment } from "../controllers/comment.js";

const router = express.Router();



router.get("/", getComments);
router.post("/", addComment);

export default router;
