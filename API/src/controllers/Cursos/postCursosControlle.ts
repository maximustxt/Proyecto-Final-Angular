import Curso from "../../models/Cursos";
//*- Interfaces :
import { ICursos } from "../../../common/Interfaces";

const postCursosControlle = async (P_Curso: ICursos) => {
  try {
    const { nombre } = P_Curso;

    const curso = await Curso.findOne({ nombre }).exec();

    if (curso) {
      throw new Error("Curso ya creado!");
    } else {
      const newCurso = new Curso(P_Curso);
      await newCurso.save();
      const Cursos = await Curso.find();
      return Cursos;
    }
  } catch (error: any) {
    throw new Error(error);
  }
};

export default postCursosControlle;
