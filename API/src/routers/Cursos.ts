import { Router } from "express";

//*- IMPORT DE CONTROLLERS  :
import getCursosControlle from "../controllers/Cursos/getCursosControlle";
import putCursosControlle from "../controllers/Cursos/putCursosControlle";
import postCursosControlle from "../controllers/Cursos/postCursosControlle";
import deleteCursosControlle from "../controllers/Cursos/deleteCursosControlle";

const RutaCurso = Router();

/!*------------------------------ OBTENER CURSOS ---------------------------------*/;

RutaCurso.get("/", async (req, res) => {
  try {
    const response = await getCursosControlle();
    res.status(200).json(response);
  } catch (error: any) {
    console.error(error.message);
    res.status(500).json(error.message);
  }
});

/!*------------------------------ ACTUALIZAR CURSO -------------------------------*/;

RutaCurso.put("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const curso = req.body;

    const response = await putCursosControlle(_id, curso);
    res.status(200).json(response);
  } catch (error: any) {
    console.error(error.message);
    res.status(500).json(error.message);
  }
});

/!*------------------------------ CREAR CURSO -------------------------------*/;

RutaCurso.post("/", async (req, res) => {
  try {
    const curso = req.body;

    const response = await postCursosControlle(curso);
    res.status(200).json(response);
  } catch (error: any) {
    console.error(error.message);
    res.status(500).json(error.message);
  }
});

/!*------------------------------ ELIMINAR CURSO -------------------------------*/;

RutaCurso.delete("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;

    const response = await deleteCursosControlle(_id);
    res.status(200).json(response);
  } catch (error: any) {
    console.error(error.message);
    res.status(500).json(error.message);
  }
});

export default RutaCurso;
