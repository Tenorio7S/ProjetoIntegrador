
import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  senha: { type: String, required: true },
  tipo: { type: String, enum: ['funcionario', 'administrador'], required: true }
});

export default mongoose.model('Usuario', usuarioSchema);
