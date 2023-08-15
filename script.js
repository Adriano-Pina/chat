document.addEventListener("DOMContentLoaded", function() {
  const chatWrapper = document.querySelector(".chat-wrapper");
  const chatBody = document.getElementById("chatBody");
  const userInput = document.getElementById("userInput");
  const minimizeButton = document.getElementById("minimizeButton");

  // Adiciona a classe minimized ao chat ao carregar a página
  chatWrapper.classList.add("minimized");
  chatBody.classList.add("minimized");

  userInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      const userMessage = userInput.value.trim();
      if (userMessage !== "") {
        appendMessage("Você", userMessage, "user");
        userInput.value = "";
        simulateReply();
      }
    }
  });

  minimizeButton.addEventListener("click", function() {
    chatWrapper.classList.toggle("minimized");
    chatBody.classList.toggle("minimized");
  });

  function appendMessage(sender, message, type) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("chat-message", type);
    messageDiv.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatBody.appendChild(messageDiv);
    chatBody.scrollTop = chatBody.scrollHeight; // Auto-scroll to bottom
  }

  function simulateReply() {
    const replies = [
      "Obrigado por sua mensagem!",
      "Estamos verificando seu pedido.",
      "Em breve, entraremos em contato.",
      "Se precisar de ajuda, é só chamar!",
      "Excelente escolha! Vamos preparar o seu pedido.",
      "Estamos sempre à disposição para ajudar.",
    ];

    setTimeout(function() {
      const randomReply = replies[Math.floor(Math.random() * replies.length)];
      appendMessage("Atendente", randomReply, "bot");
    }, getRandomReplyDelay());
  }

  function getRandomReplyDelay() {
    // Gera um atraso aleatório entre 1 e 5 segundos
    return Math.floor(Math.random() * 4000) + 1000;
  }
});
