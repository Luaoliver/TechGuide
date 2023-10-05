// If...Else é uma estrutura condicional. If executa uma afirmação
// presente dentro de um bloco, se determinada condição for
// verdadeira. Se a condição for falsa, executará o bloco presente
// em else.

// if (condição) 
//   instrução

// if (condição) 
//   instrução1
// else
//   instrução2

// Uma condição é uma premissa que pode ser avaliada como verdadeira
// ou falsa.

// Para executar multiplas instruções dentro de uma condição, deve-se
// utilizar o boloco ({...})
// Mas é sempre uma boa prática utilizar dentro de blocos, especialmente
// códigos que envolvam if aninhados.

// if (condição) {
//   instrução1
// } else {
//   instrução2
// }

// Não confunda os valores boolean primitivos 'true' e 'false' com
// os valores 'true' e 'false' do objeto Boolean.
// Qualquer valor que não seja 'undefined', 'null', '0', 'NaN', ou
// uma string vazia (''), e qualquer objeto, incluindo o onjeto
// Booleand, cujo valor seja false, é avaliado como true quando
// passado por uma condicional.

// var b = new Boolean(false);
// if (b) // essa condição é avaliada como true



if (cipher_char === from_char) {
    result = result + to_char;
    x++;
} else {
    result = result + clear_char;
}

if (x > 5) {
} else if (x > 50) {
} else {
}

// Não é recomendados utilizar atribuições simples junto a uma
// expressão condicional.
// As atribuições simples podem ser confundidas com igualdade ao
// olhar o código.
// Exemplo do que NÃO fazer

if (x = y) {
    /* faça a coisa certa */
}

// Caso você precise utilizar uma atribuição em uma expressão
// condicional, uma prática comum é inserir parênteses adicionais em
// volta da atribuição.
// Veja:

if ((x = y)) {
    /* faça a coisa certa */
}