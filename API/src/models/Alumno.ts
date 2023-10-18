import { model, Schema } from "mongoose";

const Alumnos = new Schema(
  {
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    imagen: { type: String, required: true },
    cursando: {
      type: String,
      enum: ["Esta Cursando", "Abandono", "Finalizo"],
      required: true,
    },
    edad: { type: Number },
  },
  { timestamps: false }
);

const Alumo = model("Alumno", Alumnos);

export default Alumo;
