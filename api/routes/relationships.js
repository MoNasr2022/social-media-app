
import express from "express";

import { getFollowers, addFollower, deleteFollower } from "../controllers/relationship.js";

const router = express.Router();

router.get("/", getFollowers);
router.post("/", addFollower);
router.delete("/", deleteFollower);


export default router;