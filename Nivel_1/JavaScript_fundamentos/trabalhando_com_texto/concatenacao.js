const button = document.querySelector("button");

function greet() {
  const name = prompt("What is your name?");
  const greeting = document.querySelector("#greeting");
  greeting.textContent = `Hello ${name}, nice to see you!`;
}

button.addEventListener("click", greet);

// Aqui estamos utilizando a função window.prompt(.), que pede ao
// usuário para responder a uma pergunta por meio de uma caixa de
// diálogo pop-up e depois armazena o texto inserido dentro de uma
// determinada variável - neste caso, name.
// Em seguida, exibimos uma string que insere o nome em uma
// mensagem de saudação genérica.