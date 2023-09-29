// Obtendo referências para os elementos 
const display = document.getElementById("display");
const buttons = document.getElementsByClassName("number");
const operators = document.getElementsByClassName("operador");
const equalsButton = document.getElementById("equals"); // Último ajuste kkk
const clearButton = document.getElementById("btn.Clear");

let currentExpression = ""; // Variável para armazenar a expressão atual

let currentExpression1 = ""; // Variável para armazenar a expressão antiga

// Função para atualizar o display da calculadora
function updateDisplay(value) {
  display.value = value;
};

// Adicionando eventos aos botões numéricos
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    currentExpression += this.querySelector("img").alt; // Concatena o número ao final da expressão atual
    updateDisplay(currentExpression); // Atualiza o display
  });
};

// Adicionando eventos aos operadores
for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", function () {
    currentExpression += this.querySelector("img").alt; // Concatena o operador ao final da expressão atual
    updateDisplay(currentExpression); // Atualiza o display
  });
};

// Adicionando evento ao botão de igualdade
equalsButton.addEventListener("click", function () {
  try {
    const result = math.evaluate(currentExpression);
    if (result !== undefined && result !== null && !isNaN(result)) {
      updateDisplay(result);
      currentExpression1 = currentExpression; // Armazena a expressão atual
      currentExpression = result.toString(); // Atualiza a expressão atual com o resultado
    } else {
      updateDisplay("Erro: Resultado inválido");
      currentExpression = "";
    }
  } catch (error) {
    updateDisplay("Erro: " + error.message);
    currentExpression = "";
  }
});

// Adicionando evento ao botão de limpar
clearButton.addEventListener("click", function () {
  currentExpression = ""; // Limpa a expressão atual
  updateDisplay(""); // Limpa o display
});