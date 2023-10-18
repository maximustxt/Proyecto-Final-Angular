import mongoose from "mongoose";
import Curso from "../../models/Cursos";

const deleteCursosControlle = async (id: string) => {
  try {
    const cursoId = new mongoose.Types.ObjectId(id); // Convierte la cadena en ObjectId

    const alumnoEncontrar = await Curso.findOneAndDelete(cursoId).exec(); // exec transforma a una promesa.
    if (alumnoEncontrar) {
      const Cursos = await Curso.find();
      return Cursos;
    } else {
      throw new Error("Curso no existente!");
    }
  } catch (error: any) {
    throw new Error(error);
  }
};

export default deleteCursosControlle;
