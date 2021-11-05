import express from "express";
import { getNationality } from "../controllers/nationality.controller";

const router = express.Router();

router.get("/getNationality", getNationality);

export default router;
