const bras = [
  {
    name: "BraAgendarLig",
    description: "Agendar uma ligação para discutir a conta.",
    color: "Azul",
  },
  {
    name: "BraChatCelular",
    description: "Instruções para manter o chat ao vivo no celular.",
    color: "Azul",
  },
  {
    name: "BraDadosAtualizados",
    description: "Confirmação de que os dados foram atualizados.",
    color: "Verde",
  },
  {
    name: "BraEnderecoEmail",
    description: "Informar o e-mail de suporte.",
    color: "Azul",
  },
  {
    name: "BraExtratoSolicitado",
    description: "Confirmação de envio de extrato por e-mail.",
    color: "Verde",
  },
  {
    name: "BraIdiomaIndisponivel",
    description: "Informar indisponibilidade de suporte em um idioma.",
    color: "Vermelho",
  },
  {
    name: "BraInconveniencia",
    description: "Pedir desculpas por qualquer inconveniente.",
    color: "Verde Claro",
  }, // alterado para Verde Claro
  {
    name: "BraIntroAcesso",
    description: "Assistência para problemas de acesso à conta.",
    color: "Verde",
  },
  {
    name: "BraLigacaoAgendada",
    description: "Confirmação de retorno de chamada agendado.",
    color: "Azul",
  },
  {
    name: "BraProduto",
    description: "Solicitar confirmação do produto relacionado.",
    color: "Azul",
  },
  {
    name: "BraTCs",
    description: "Instruções para acessar Termos e Condições.",
    color: "Azul",
  },
  {
    name: "BraAguardCliente1",
    description: "Perguntar se precisa de mais assistência.",
    color: "Amarelo",
  }, // alterado para Amarelo
  {
    name: "BraAguardCliente2",
    description: "Informar que está aguardando resposta do cliente.",
    color: "Amarelo",
  }, // alterado para Amarelo
  {
    name: "BraAlgoMais",
    description: "Oferecer ajuda adicional.",
    color: "Amarelo",
  }, // alterado para Amarelo
  {
    name: "BraEncChat",
    description: "Agradecer por usar o chat ao vivo.",
    color: "Azul",
  },
  {
    name: "BraEnviarTransc",
    description: "Enviar transcrição do chat por e-mail.",
    color: "Azul",
  },
  {
    name: "BraOla",
    description: "Saudação de boas-vindas ao chat ao vivo.",
    color: "Azul",
  },
  {
    name: "BraContAguardar",
    description: "Pedir para aguardar enquanto verifica informações.",
    color: "Laranja",
  },
  {
    name: "BraPodeAguardar",
    description: "Solicitar que o cliente aguarde até 3 minutos.",
    color: "Laranja",
  },
  {
    name: "BraMaisAssistencia",
    description: "Verificar se o cliente precisa de mais ajuda.",
    color: "Amarelo",
  }, // alterado para Amarelo
  {
    name: "BraSemResposta1",
    description: "Perguntar se o cliente deseja continuar com o chat.",
    color: "Cinza",
  },
  {
    name: "BraSemResposta2",
    description: "Avisar que o chat será encerrado sem resposta.",
    color: "Cinza",
  },
  {
    name: "BraPodeAguardar2",
    description: "Agradecer por aguardar e pedir mais tempo.",
    color: "Laranja",
  },
  {
    name: "BraEspera1",
    description: "Informar que ainda está analisando a conta.",
    color: "Laranja",
  },
  {
    name: "BraEspera2",
    description: "Pedir para aguardar enquanto continua análise.",
    color: "Laranja",
  },
  {
    name: "BraEspera3",
    description: "Pedir desculpas pela demora na análise.",
    color: "Laranja",
  },
  {
    name: "BraEspera4",
    description: "Pedir aguardo enquanto contata o departamento.",
    color: "Laranja",
  },
  {
    name: "BraEspera5",
    description: "Departamento ainda analisando, pedir para aguardar.",
    color: "Laranja",
  },
  {
    name: "BraUmMomento",
    description: "Pedir um momento para verificar as informações.",
    color: "Laranja",
  },
  {
    name: "BraEscTransfer",
    description: "Transferir conversa para outro atendente.",
    color: "Laranja",
  },
  {
    name: "BraIdiomaIncorreto",
    description: "Transferir para colega por dificuldade de idioma.",
    color: "Laranja",
  },
  {
    name: "BraTransferChat2",
    description: "Transferir para colega que pode ajudar melhor.",
    color: "Laranja",
  },
  {
    name: "BraTranferEspor",
    description: "Transferir para especialista em Esportes.",
    color: "Laranja",
  },
  {
    name: "BraTranferRG",
    description: "Transferir devido a restrições de Jogo Responsável.",
    color: "Marrom",
  },
  {
    name: "BraNomeUsuario",
    description: "Solicitar usuário do cliente.",
    color: "Vermelho",
  },
  {
    name: "BraPerAltSeg1",
    description: "Perguntar mês e ano de abertura da conta.",
    color: "Vermelho",
  },
  {
    name: "BraPerAltSeg2",
    description: "Perguntar sobre último depósito ou saque.",
    color: "Vermelho",
  },
  {
    name: "BraPerAltSeg3",
    description: "Perguntar última atividade realizada na conta.",
    color: "Vermelho",
  },
  {
    name: "BraPerAltSeg4",
    description: "Perguntar sobre envio de documento de identificação.",
    color: "Vermelho",
  },
  {
    name: "BraAltSeg5",
    description: "Perguntar data da última utilização da conta.",
    color: "Vermelho",
  },
  {
    name: "BraAltSeg6",
    description: "Verificar e-mail de boas-vindas na caixa de entrada.",
    color: "Vermelho",
  },
  {
    name: "BraSegurancaAdicional",
    description: "Confirmar informações adicionais para segurança.",
    color: "Vermelho",
  },
  {
    name: "BraSegurancaPadrao",
    description: "Confirmar informações básicas de segurança.",
    color: "Vermelho",
  },
  {
    name: "BraIntroDeposito",
    description: "Assistência para problemas com depósito.",
    color: "Verde",
  },
  {
    name: "BraIntraDeposito2",
    description: "Ajuda para localizar depósito.",
    color: "Verde",
  },
  {
    name: "BraIntraVerificacao",
    description: "Assistência com verificação de conta.",
    color: "Verde",
  },
  {
    name: "BraIntroSaque",
    description: "Assistência para questões de saque.",
    color: "Verde",
  },
  {
    name: "BraIntroSaque2",
    description: "Perguntar sobre recebimento de valor em conta.",
    color: "Verde",
  },
  {
    name: "BraMotivodeContato",
    description: "Pedir para descrever brevemente a dúvida.",
    color: "Azul",
  },
  {
    name: "BraEncerraConta1",
    description: "Perguntar motivo para encerrar a conta.",
    color: "Marrom",
  },
  {
    name: "BraEncerrarConta2",
    description: "Perguntar sobre insatisfação no uso da conta.",
    color: "Marrom",
  },
  {
    name: "BraEncerrarConta3",
    description: "Instruções para encerrar a conta.",
    color: "Marrom",
  },
  {
    name: "BraEncerrarConta4",
    description: "Confirmar encerramento da conta.",
    color: "Marrom",
  },
  {
    name: "BraIntroRG",
    description: "Perguntar motivo de contato sobre Jogo Responsável.",
    color: "Marrom",
  },
  {
    name: "BraEncerrarPermConta1",
    description: "Confirmar decisão de encerrar conta permanentemente.",
    color: "Marrom",
  },
  {
    name: "BraEncerrarPermConta2",
    description: "Explicar implicações do encerramento permanente.",
    color: "Marrom",
  },
  {
    name: "BraEncerrarPermConta3",
    description: "Confirmar encerramento permanente da conta.",
    color: "Marrom",
  },
  {
    name: "BraIntroAposta",
    description: "Assistência com questões de aposta.",
    color: "Roxo",
  },
  {
    name: "BraRGMensagemWeb",
    description: "Informar política de mensagens de Jogo Responsável.",
    color: "Marrom",
  },
  {
    name: "BraJogoResponsavelAjustes",
    description: "Informar ajustes na conta para Jogo Responsável.",
    color: "Marrom",
  },
  {
    name: "BraProtecaoAoJogador",
    description: "Informar medidas de proteção ao jogador.",
    color: "Marrom",
  },
  {
    name: "BraMoedaAlterarBRL",
    description: "Explicar processo para alterar moeda da conta.",
    color: "Roxo",
  },
  {
    name: "BraMoedaAlterar",
    description: "Informar impossibilidade de alterar moeda.",
    color: "Roxo",
  },
  {
    name: "BraCartaoAlterar",
    description: "Instruções para alterar dados de cartão.",
    color: "Roxo",
  },
  {
    name: "BraComprovTitularRej",
    description: "Solicitar novo documento por rejeição de comprovante.",
    color: "Roxo",
  },
  {
    name: "BraTransacoesHistorico",
    description: "Instruções para acessar histórico de transações.",
    color: "Roxo",
  },
  {
    name: "BraComprovTitularCartao",
    description: "Solicitar comprovante de titularidade do cartão.",
    color: "Roxo",
  },
  {
    name: "BraComprovTitularDadosBancarios",
    description: "Solicitar comprovante de dados bancários.",
    color: "Roxo",
  },
  {
    name: "BraAcessoBiometria",
    description: "Instruções para uso de biometria no login.",
    color: "Verde Claro",
  },
  {
    name: "BraIdentidadeRoubada2",
    description: "Encaminhamento de dados para investigação de fraude.",
    color: "Vermelho",
  },
  {
    name: "BraIdentidadeRoubada3",
    description: "Ação tomada para contas abertas com dados roubados.",
    color: "Vermelho",
  },
  {
    name: "BraIdentidadeRoubada",
    description: "Medidas para proteger conta e dados pessoais.",
    color: "Vermelho",
  },
  {
    name: "BraSenhaSegura",
    description: "Recomendar alteração imediata de senha por segurança.",
    color: "Vermelho",
  },
  {
    name: "BraAbrirConta",
    description: "Instruções para abrir uma nova conta.",
    color: "Azul",
  },
  {
    name: "BraBiometriaConfigurar",
    description: "Configurar biometria digital no dispositivo.",
    color: "Verde Claro",
  },
  {
    name: "BraContaReaberta",
    description: "Confirmar reabertura da conta.",
    color: "Verde",
  },
  {
    name: "BraParceria",
    description: "Informações para se tornar parceiro da bet365.",
    color: "Azul",
  },
  {
    name: "BraMensagemErro",
    description: "Solicitar detalhes de mensagens de erro recebidas.",
    color: "Cinza",
  },
  {
    name: "Biometria",
    description: "Explicação sobre uso de biometria nos aplicativos.",
    color: "Verde Claro",
  },
  {
    name: "BraPCAPhishing",
    description: "Confirmar informações em caso de suspeita de phishing.",
    color: "Vermelho",
  },
  {
    name: "BraPCA1",
    description: "Confirmar atividade não realizada na conta.",
    color: "Vermelho",
  },
  {
    name: "BraPCA2",
    description: "Verificar acesso não autorizado à conta.",
    color: "Vermelho",
  },
  {
    name: "BraPCA3",
    description: "Confirmar última atividade na conta.",
    color: "Vermelho",
  },
  {
    name: "BraPCA4",
    description: "Perguntar última vez que fez login.",
    color: "Vermelho",
  },
  {
    name: "BraPCA5",
    description: "Informar dispositivo e método de acesso.",
    color: "Vermelho",
  },
  {
    name: "BraPCA6",
    description: "Solicitar modelo do dispositivo usado.",
    color: "Vermelho",
  },
  {
    name: "BraPreferenciaDeContato",
    description: "Atualizar preferências de contato de marketing.",
    color: "Azul",
  },
  {
    name: "BraReabrirContaOnline",
    description: "Instruções para reabrir conta online.",
    color: "Azul",
  },
  {
    name: "BraSoleAccess2",
    description: "Solicitar contato do titular da conta.",
    color: "Vermelho",
  },
  {
    name: "BraPCADispPerdidoRoubado",
    description:
      "Informar que dispositivo perdido não é acesso não autorizado.",
    color: "Vermelho",
  },
  {
    name: "BraPCASemEvidencia",
    description: "Informar ausência de evidência de atividade não autorizada.",
    color: "Vermelho",
  },
  {
    name: "BraEncerrarTempConta",
    description: "Confirmar encerramento temporário da conta.",
    color: "Marrom",
  },
  {
    name: "BraComoVerificar",
    description: "Instruções para verificar a conta.",
    color: "Vermelho",
  },
  {
    name: "BraContaNaoVerificada",
    description: "Informar necessidade de completar verificação.",
    color: "Vermelho",
  },
  {
    name: "BraContaNaoVerificadaRestrita",
    description: "Informar restrição até verificação completa.",
    color: "Vermelho",
  },
  {
    name: "BraContaVerificada",
    description: "Confirmar verificação completa da conta.",
    color: "Verde",
  },
  {
    name: "BraDepSemVerificar",
    description: "Informar período de tolerância para verificação.",
    color: "Vermelho",
  },
  {
    name: "BraPorqueVerificar",
    description: "Explicar importância da verificação de conta.",
    color: "Vermelho",
  },
  {
    name: "BraPotencialMenorDeIdade",
    description: "Solicitar documento para confirmar idade.",
    color: "Vermelho",
  },
  {
    name: "BraPrazoVeridicacao",
    description: "Informar prazo para análise de documentos.",
    color: "Vermelho",
  },
  {
    name: "BraSaqueIndisponivel",
    description: "Informar que saques não são possíveis sem verificação.",
    color: "Vermelho",
  },
  {
    name: "BraVerificacaoPostal",
    description: "Instruções para inserir código de verificação postal.",
    color: "Vermelho",
  },
];

let currentQuestion = 0;
let score = 0;
let phase = 1;
const questionsPerPhase = 15;

// Função para embaralhar o array de perguntas
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Embaralhar as perguntas ao carregar a página
shuffleArray(bras);

function loadQuestion() {
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const answerInput = document.getElementById("answer");
  const submitButton = document.getElementById("submit-btn");
  const showAnswerButton = document.getElementById("show-answer-btn");
  const nextButton = document.getElementById("next-btn");
  const restartButton = document.getElementById("restart-btn");
  const endButton = document.getElementById("end-btn");
  const currentBra = bras[currentQuestion];

  if (phase === 1) {
    questionElement.textContent = `Qual é a descrição do BRA: ${currentBra.name}?`;
    optionsElement.innerHTML = "";
    answerInput.style.display = "none";
    submitButton.style.display = "none";
    showAnswerButton.style.display = "none";
    nextButton.style.display = "none";
    restartButton.style.display = "none";
    endButton.style.display = "none";

    // Selecionar uma opção de cada categoria de cor
    const uniqueColors = [...new Set(bras.map((bra) => bra.color))];
    const options = uniqueColors.map((color) => {
      const optionsForColor = bras.filter((bra) => bra.color === color);
      return optionsForColor[
        Math.floor(Math.random() * optionsForColor.length)
      ];
    });

    // Garantir que a opção correta está incluída
    if (!options.includes(currentBra)) {
      options[Math.floor(Math.random() * options.length)] = currentBra;
    }

    options.forEach((option) => {
      const optionElement = document.createElement("div");
      optionElement.textContent = option.description;
      optionElement.className = `option ${option.color.toLowerCase()}`;
      optionElement.onclick = () => selectOption(optionElement, option);

      optionsElement.appendChild(optionElement);
    });
  } else if (phase === 2) {
    questionElement.textContent = `Qual é o nome do BRA para: "${currentBra.description}"?`;
    optionsElement.innerHTML = "";
    answerInput.style.display = "block";
    submitButton.style.display = "block";
    showAnswerButton.style.display = "block";
    nextButton.style.display = "none";
    answerInput.style.backgroundColor = getColorByName(currentBra.color);
  }

  updateProgressBar();
}

function selectOption(element, option) {
  const correctOption = bras[currentQuestion];
  if (option.name === correctOption.name) {
    element.classList.add("correct");
    score++;
  } else {
    element.classList.add("wrong");
  }

  document.getElementById("score").textContent = `Pontuação: ${score}`;

  setTimeout(() => {
    currentQuestion++;
    if (currentQuestion % questionsPerPhase === 0) {
      if (phase === 1) {
        alert(`Você completou a Fase 1! Bem-vindo à Fase 2!`);
        phase = 2;
      } else {
        showResults();
        return;
      }
    }
    loadQuestion();
  }, 1500);
}

function submitAnswer() {
  const answer = document.getElementById("answer").value.trim().toLowerCase();
  const correctAnswer = bras[currentQuestion].name.toLowerCase();

  document.getElementById("answer").value = ""; // Limpar campo de resposta

  if (answer === correctAnswer) {
    score++;
    document.getElementById("feedback").textContent = "Correto!";
    document.getElementById("feedback").classList.remove("wrong");
    document.getElementById("feedback").classList.add("correct");
  } else {
    document.getElementById(
      "feedback"
    ).textContent = `Errado! O correto é: ${bras[currentQuestion].name}`;
    document.getElementById("feedback").classList.remove("correct");
    document.getElementById("feedback").classList.add("wrong");
  }

  document.getElementById("score").textContent = `Pontuação: ${score}`;
  document.getElementById("next-btn").style.display = "block";
  document.getElementById("submit-btn").style.display = "none";
  document.getElementById("show-answer-btn").style.display = "none";
}

function showAnswer() {
  const currentBra = bras[currentQuestion];
  alert(`A resposta correta é: ${currentBra.name}`);
}

function nextQuestion() {
  document.getElementById("feedback").textContent = "";
  currentQuestion++;
  if (currentQuestion % questionsPerPhase === 0) {
    showResults();
  } else {
    loadQuestion();
  }
}

function getColorByName(colorName) {
  switch (colorName.toLowerCase()) {
    case "azul":
      return "#1e88e5";
    case "verde":
      return "#43a047";
    case "amarelo":
      return "#66bb6a"; // Agora usa verde claro
    case "laranja":
      return "#fb8c00";
    case "vermelho":
      return "#e53935";
    case "verde claro":
      return "#fdd835"; // Agora usa amarelo
    case "cinza":
      return "#757575";
    case "marrom":
      return "#8d6e63";
    case "roxo":
      return "#8e24aa";
    default:
      return "#ffffff";
  }
}

function updateProgressBar() {
  const progressBar = document.getElementById("progress-bar");
  const progress =
    (((currentQuestion % questionsPerPhase) + 1) / questionsPerPhase) * 100;
  progressBar.style.width = `${progress}%`;
}

function showResults() {
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  questionElement.textContent = `Você completou o quiz! Sua pontuação: ${score} de ${bras.length}`;
  optionsElement.innerHTML = "";
  document.getElementById("answer").style.display = "none";
  document.getElementById("submit-btn").style.display = "none";
  document.getElementById("show-answer-btn").style.display = "none";
  document.getElementById("next-btn").style.display = "none";
  document.getElementById("feedback").style.display = "none";
  document.getElementById("restart-btn").style.display = "block";
  document.getElementById("end-btn").style.display = "block";
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  phase = 1;
  shuffleArray(bras); // Embaralhar as perguntas novamente
  loadQuestion();
  document.getElementById("restart-btn").style.display = "none";
  document.getElementById("end-btn").style.display = "none";
}

function endQuiz() {
  alert(
    "Parabéns pela dedicação nos estudos! Continue se dedicando e até logo!"
  );
  document.getElementById("question").textContent = "Obrigado por jogar!";
  document.getElementById("score").style.display = "none";
  document.getElementById("restart-btn").style.display = "none";
  document.getElementById("end-btn").style.display = "none";
}

loadQuestion();
