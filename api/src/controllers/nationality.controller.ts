import { NextFunction, Request, Response } from "express";
import Students from "../models/Students";

export const getNationality = async (
  _: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  try {
    const nationality = await Students.find().distinct("nationality");
    return res.status(200).json(nationality);
  } catch (error) {
    return next(error);
  }
};
