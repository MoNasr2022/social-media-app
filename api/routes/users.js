import mysqle from "mysql";
import express from "express";
import cors from "cors";
import { getUser, updateUser } from "../controllers/user.js";


const router = express.Router();




router.get('/find/:userId', getUser)
router.put('/', updateUser)


export default router