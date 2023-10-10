// A instrução for cria um loop que consiste em três expressões
// opcionais, dentro de parênteses e separadas por ponto e vírgula,
// seguidas por uma declaração ou uma sequência de declarações
// executadas em sequência.

for ([inicialização]; [condição]; [expressão_final])
   declaração

// Inicialização é geralmente usada para iniciar o contador de
// variáveis.Esta expressão pode, opcionalmente, declarar novas
// variáveis com a palavra chave var. Essas variáveis não são
// locais no loop, isto é, elas estão no mesmo escopo que o loop
// for está. Variáveis declaradas com let são locais para a
// declaração. O resultado desta expressão é descartado.

// Condição é uma expressão para ser avaliada antes de cada
// iteração do loop. Se esta expressão for avaliada para true,
// declaração será executado. Este teste da condição é opcional.
// Se omitido, a condição sempre será avaliada como verdadeira.
// Se a expressão for avaliada como falsa, a execução irá para
// a primeira expressão após a construção loop for.

// Expressão final é uma expressão que será validada no final de
// cada iteração de loop. Isso ocorre antes da próxima avaliação
// da condição. Geralmente usado para atualizar ou incrementar a
// variável do contador.

// A Declaração é executada enquanto a condição for verdadeira.
// Para executar múltiplas condições dentro do loop, use uma
// instrução de bloco ({...}) para agrupar essas condições.
// Para não executar declarações dentro do loop, use uma instrução
// vazia (;).


// Usando for
// A declaração for começa declarando a variável i e inicializando-a
// como 0. Ela verifica se i é menor que nove, executa as duas
// instruções subsequentes e incrementa 1 a variável i após cada
// passagem pelo loop.

for (var i = 0; i < 9; i++) {
    console.log(i);
    // more statements
}

// Todas as três expressões na condição do loop for são opcionais.

var i = 0;
for (; i < 9; i++) {
  console.log(i);
  // more statements
}

// Assim como ocorre no bloco de inicialização, a condição também é
// opcional. Se você está omitindo essa expressão, você deve
// certificar-se de quebrar o loop no corpo para não criar um loop
// infinito.

for (var i = 0; ; i++) {
    console.log(i);
    if (i > 3) break;
    // more statements
  }

// Você também pode omitir todos os três blocos. Novamente,
// certifique-se de usar uma instrução break no final do loop e
// também modificar (incrementar) uma variável, para que a condição
// do break seja verdadeira em algum momento.

var i = 0;

for (;;) {
  if (i > 3) break;
  console.log(i);
  i++;
}


// Usando for sem uma declaração

// O ciclo for a seguir calcula a posição de deslocamento de um nó
// na seção [expressão final] e, portanto, não requer o uso de uma
// declaração ou de um bloco de declaração, e no seu lugar é usado
// um ponto-vírgula - ;.

function showOffsetPos(sId) {
    var nLeft = 0,
      nTop = 0;
  
    for (
      var oItNode = document.getElementById(sId); // inicialização
      oItNode; // condition
      nLeft += oItNode.offsetLeft,
        nTop += oItNode.offsetTop,
        oItNode = oItNode.offsetParent // expressão final
      /* empty statement */
    );
  
    console.log(
      'Offset position of "' +
        sId +
        '" element:\n left: ' +
        nLeft +
        "px;\n top: " +
        nTop +
        "px;",
    );
  }
  
  // Exemplo de call:
  
  showOffsetPos("content");
  
  // Resultado:
  // "Offset position of "content" element:
  // left: 0px;
  // top: 153px;"
