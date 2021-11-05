import { Schema, model, Model } from 'mongoose';

export interface StundetsI {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    nationality: string;
  }

const StudentsSchema = new Schema<StundetsI, Model<StundetsI>, StundetsI>(
  {
    id: { type: Number, required: true },
    firstName: { type: String, required: true},
    lastName: { type: String, required: true},
    age: { type: Number, required: true},
    nationality: { type: String, required: true }
  },
  {
    collection: 'students',
  },
);

const Students = model('students', StudentsSchema);

export default Students;