import mysqle from "mysql";
import express from "express";
import cors from "cors";
import  {getUser}  from "../controllers/user.js";


const router = express.Router();

//middlewares
router.use(express.json());
router.use(cors());

router.get('/find/:userId', getUser)


export default router