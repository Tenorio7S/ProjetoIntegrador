import mongoose from "mongoose";

const respostaSchema = new mongoose.Schema({
  candidato: { type: mongoose.Schema.Types.ObjectId, ref: 'Candidato' },
  pergunta: { type: mongoose.Schema.Types.ObjectId, ref: 'Pergunta' },
  respostaTexto: String,
  dataResposta: Date,
  avaliacaoComportamental: {
    respeito: { type: Number, min: 1, max: 5 },
    empatia: { type: Number, min: 1, max: 5 },
    autocontrole: { type: Number, min: 1, max: 5 }
  }
});

// Exporta o modelo
export default mongoose.model('Resposta', respostaSchema);
