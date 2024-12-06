import mongoose from "mongoose";

const perguntaSchema = new mongoose.Schema({
  texto: String,
  categoria: { type: String, enum: ['respeito', 'conflitos', 'empatia', 'autocontrole', 'diversidade'] },
  objetivo: String
});

// Exporta o modelo
export default mongoose.model('Pergunta', perguntaSchema);
