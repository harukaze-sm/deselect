import { NextFunction, Request, Response } from "express";
import { studentsData } from "../data/students";
import Students, { StundetsI } from "../models/Students";

export const getStudents = async (
  _: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  try {
    const students = await Students.find();
    return res.status(200).json(students);
  } catch (error) {
    return next(error);
  }
};

export const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  try {
    const { firstName, lastName, age, nationality, id } = req.body as StundetsI;
    console.info(req.body);
    const student = await Students.create({
      firstName,
      lastName,
      age,
      nationality,
      id,
    });
    return res.status(201).json(student);
  } catch (error) {
    next(error);
  }
};

export const initStudents = async (
  _: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  try {
    studentsData.map(async ({ firstName, lastName, id, age, nationality }) => {
      await Students.create({ firstName, lastName, id, age, nationality });
    });
    return res
      .status(201)
      .json({ message: "Users created successfully", success: true });
  } catch (error) {
    return next(error);
  }
};

export const getStudensByNationality = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  try {
    const { nationality } = req.params;
    if (nationality) {
      const students = await Students.find({
        nationality: nationality.charAt(0).toUpperCase() + nationality.slice(1),
      });
      return res.status(200).json(students);
    }
    return res.status(200).json({ message: "nationality not selected" });
  } catch (error) {
    return next(error);
  }
};
