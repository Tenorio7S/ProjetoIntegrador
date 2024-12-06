import express from "express";


import conectaNaDatabase from "./src/config/connect.js";
import Candidato from "./src/models/candidatoModel.js";
import Observacao from "./src/models/observacaoModel.js";
import Pergunta from "./src/models/perguntaModel.js";
import Resposta from "./src/models/respostaModel.js";
import Usuario from "./src/models/usuarioModel.js";



const app = express();

// Conectar ao banco de dados
async function iniciarApp() {
  await conectaNaDatabase();

  // Exemplo de Inserção de Dados
  await criarDados();
}

// Exemplo de Inserção de Dados
async function criarDados() {
   const candidato = new Candidato({
     nome: 'Carlos Silva',
     idade: 35,
     genero: 'masculino',
     cargoPretendido: 'Analista de TI',
     dataEntrevista: new Date()
   });
   await candidato.save();

   const pergunta = new Pergunta({
     texto: "Como você lida com situações em que há opiniões divergentes com suas colegas mulheres?",
     categoria: "respeito",
     objetivo: "Avaliar respeito pela diversidade de opiniões e igualdade entre gêneros."
   });
   await pergunta.save();

   const resposta = new Resposta({
     candidato: candidato._id,
     pergunta: pergunta._id,
     respostaTexto: "Procuro ouvir e entender a opinião antes de responder.",
     dataResposta: new Date(),
     avaliacaoComportamental: {
       respeito: 4,
       empatia: 4,
       autocontrole: 5
     }
   });
   await resposta.save();

   const observacao = new Observacao({
     candidato: candidato._id,
     tipoObservacao: 'postura corporal',
     descricao: 'Demonstrou tranquilidade e respeito ao falar.',
     dataObservacao: new Date()
   });
   await observacao.save();


   const usuario = new Usuario({
    email: 'funcionario@empres.com',
    senha: 'senhaHasheada',
    tipo: 'funcionario'
  });

  await usuario.save();

   console.log("Dados inseridos com sucesso!");
}

// Inicia a aplicação
iniciarApp();

export default app;
