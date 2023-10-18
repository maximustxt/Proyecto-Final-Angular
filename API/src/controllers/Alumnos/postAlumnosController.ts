import Alumo from "../../models/Alumno";
//*- Interfaces :
import { IAlumno } from "../../../common/Interfaces";

const postAlumnosController = async (P_Alumno: IAlumno) => {
  try {
    const { nombre } = P_Alumno;

    const alumno = await Alumo.findOne({ nombre }).exec();

    if (alumno) {
      throw new Error("Alumno ya creado!");
    } else {
      const newAlumno = new Alumo(P_Alumno);
      await newAlumno.save();
      const Alumnos = await Alumo.find();
      return Alumnos;
    }
  } catch (error: any) {
    throw new Error(error);
  }
};

export default postAlumnosController;
