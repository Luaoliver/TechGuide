// A declaração while cria um laço que executa uma rotina especifica
// enquanto a condição de teste for avaliada como verdadeira. 
// A condição é avaliada antes da execução da rotina.

while (condição) {
    rotina
}

// Condição é uma expressão avaliada antes de cada passagem através do
// do laço. Se a condição for avaliada como verdadeira, a rotina é
// executada. Se for avaliada como falsa, a execução continua após o
// laço while.

// Rotina é uma declaração que é executada quando a condição é
// avaliada como verdadeira. Para executar multiplas rotinas dentro de
// um laço, use uma declaração em bloco ({...}) para agrupar.

var n = 0;
var x = 0;

while (n < 3) {
  n++;
  x += n;
}

// Cada iteração, o laço incrementa n e soma á x. Portanto, x e n
// assumem os seguintes valores:
//   Depois da primeira passagem: n = 1 e x = 1
//   Depois da segunda passagem: n = 2 e x = 3
//   Depois da terceira passagem: n = 3 e x = 6
// Depois de completar a terceira passagem, a condição n < 3 não
// é mais verdadeira, então o laço termina.