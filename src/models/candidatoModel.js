import mongoose from "mongoose";

const candidatoSchema = new mongoose.Schema({
  nome: String,
  idade: Number,
  genero: { type: String, enum: ['masculino', 'feminino', 'outro'] },
  cargoPretendido: String,
  respostas: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Resposta' }],
  observacoes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Observacao' }],
  dataEntrevista: Date,
});

// Exporta o modelo
export default mongoose.model('Candidato', candidatoSchema);

