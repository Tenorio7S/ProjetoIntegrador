import mongoose from "mongoose";

const observacaoSchema = new mongoose.Schema({
  candidato: { type: mongoose.Schema.Types.ObjectId, ref: 'Candidato' },
  tipoObservacao: String,
  descricao: String,
  dataObservacao: Date,
});

// Exporta o modelo
export default mongoose.model('Observacao', observacaoSchema);
