// ### Calculadora Simples (2 pontos)

// **Enunciado:**

// Crie uma função chamada Calcular, que recebe dois números e uma operação matemática (`+`, `-`, `*`, `/`). A função deve:

// - Retornar `"Erro: parâmetros inválidos"` se `a` ou `b` não forem números.
// - Retornar `"Erro: divisão por zero"` se tentar dividir por zero;
// - Retornar `"Erro: operação inválida"` se for passado um operador desconhecido;
// - Executar a operação correta e retornar o resultado;

function calcular(num1, num2, operador) {
  if(operador === "+"){
    let resultado = "num1" + "num2"
  }
  
  if(operador === "-"){
    let resultado = "num1" - "num2"
  }

  if(operador === "*"){
    let resultado = "num1" * "num2"
  }
  if(operador === "/"){
    let resultado = "num1" / "num2"
  }

  if(operador !== "+", "-", "*", "/"){
    console.log("Erro: operação inválida")
  }

  if("num1" / "0"){
    console.log("Erro: divisão por zero")
  }

}


//NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { calcular };