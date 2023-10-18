import Curso from "../../models/Cursos";

const getCursosControlle = async () => {
  try {
    const response = await Curso.find();
    return response;
  } catch (error: any) {
    throw new Error(error);
  }
};

export default getCursosControlle;
