import Curso from "../../models/Cursos";
//*- Interface :
import { ICursos } from "../../../common/Interfaces";

const putCursosControlle = async (id: string, P_Curso: ICursos) => {
  try {
    let curso = await Curso.findById(id).exec();

    if (!curso) {
      throw new Error("Curso Inexistente");
    } else {
      curso.set(P_Curso);
      await curso?.save();
      const Cursos = await Curso.find();
      return Cursos;
    }
  } catch (error: any) {
    throw new Error(error);
  }
};

export default putCursosControlle;
