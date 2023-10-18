import { Router } from "express";

//*- IMPORT DE CONTROLLERS :
import getAlumnosControlle from "../controllers/Alumnos/getAlumnosController";
import putAlumnosControlle from "../controllers/Alumnos/putAlumnosController";
import postAlumnosControlle from "../controllers/Alumnos/postAlumnosController";
import deleteAlumnosControlle from "../controllers/Alumnos/deleteAlumnosController";

const RutaAlumnos = Router();

/!*------------------------------ OBTENER ALUMNOS ---------------------------------*/;

RutaAlumnos.get("/", async (req, res) => {
  try {
    const response = await getAlumnosControlle();
    res.status(200).json(response);
  } catch (error: any) {
    console.error(error.message);
    res.status(500).json(error.message);
  }
});

/!*------------------------------ ACTUALIZAR ALUMNO -------------------------------*/;

RutaAlumnos.put("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const alumno = req.body;

    const response = await putAlumnosControlle(_id, alumno);
    res.status(200).json(response);
  } catch (error: any) {
    console.error(error.message);
    res.status(500).json(error.message);
  }
});

/!*------------------------------ CREAR ALUMNO -------------------------------*/;

RutaAlumnos.post("/", async (req, res) => {
  try {
    const alumno = req.body;

    const response = await postAlumnosControlle(alumno);
    res.status(200).json(response);
  } catch (error: any) {
    console.error(error.message);
    res.status(500).json(error.message);
  }
});

/!*------------------------------ ELIMINAR ALUMNO -------------------------------*/;

RutaAlumnos.delete("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;

    const response = await deleteAlumnosControlle(_id);
    res.status(200).json(response);
  } catch (error: any) {
    console.error(error.message);
    res.status(500).json(error.message);
  }
});

export default RutaAlumnos;
