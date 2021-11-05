import express from "express";
import {
  createStudent,
  initStudents,
  getStudents,
  getStudensByNationality,
} from "../controllers/students.controller";

const router = express.Router();

router.get("/getStudents", getStudents);
router.get("/getStudents/:nationality", getStudensByNationality);
router.post("/new", createStudent);
router.post("/init", initStudents);

export default router;
