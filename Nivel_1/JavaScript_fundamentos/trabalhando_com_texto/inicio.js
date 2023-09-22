const single = 'Single quotes';
const double = "Double quotes";
// É uma boa prática escolher um estilo e utiliza-lo de
// forma consistente em seu código

// string declarada com crase é chama de template literal
// Possuem algumas propriedades especiais:
//   você pode incorporar JavaScript neles
//   você pode declarar literais de modelo em várias linhas
const backtick = `Backtick`;

// Com template literal você pode agrupar variáveis ou expressões:
const name = "Luana";
const greeting = `Hello, ${name}!`;
console.log(greeting); // "Hello, Luana"

// Também pode usar a mesma técnica para unir duas variáveis:
//Também conhecido como concatenação
const one = "Hello, ";
const two = "how are you?";
const joined = `${one}${two}`;
console.log(joined); // "Hello, how are you?"


// **Concatenaçõa usando "+"**
// ${} só pode ser utilizado para concatenar com template literal,
// mas não com strings normais.
// Para concatenar strings normais, é necessário utilizar "+"

const greeting1 = "Hello";
const name1 = "Luana";
console.log(greeting1 + ", " + name1); // "Hello, Chris"

// Porém, template literal oferece um modelo mais legível:
const greeting2 = "Hello";
const name2 = "Luana";
console.log(`${greeting2}, ${name2}`); // "Hello, Chris"


// **Incluindo expressões em strings**
// É possível incluir expressoes JS em template literal ou apenas
// variáveis, e os resultados seráo incluídos no resultado:
const song = "Fight the Youth";
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}. I gave it a score of ${
  (score / highestScore) * 100
}%.`;
console.log(output); 
// "I like the song Fight the Youth. I gave it a score of 90%."


// **String multilinhas**
// O template literal respeita a quebra de linha, o que significa
// que você pode escrever strings que abrangem várias linhas:
const newline1 = `One day you finally knew
what you had to do, and began,`;
console.log(newline1);
/*
One day you finally knew
what you had to do, and began,
*/

// Para obter uma saída equivalente utilizando uma string normal,
// é preciso incluir (\n) na string:
const newline2 = "One day you finally knew\nwhat you had to do, and began,";
console.log(newline2);
/*
One day you finally knew
what you had to do, and began,
*/


// **Incluindo aspas na string**
// Uma opção de utilizar aspas dentro da string é alternar entre
// os caracteres:
const goodQuotes1 = 'She said "I think so!"';
const goodQuotes2 = `She said "I'm not going in there!"`;

// Outra maneira é utilizar caracteres de escape, que significa
// fazer algo com que eles para garantir que sejam reocnhecidos
// como texto, e não como parte do cófigo. Em JavaScript fazemos
// isso colocando uma barra invertida logo antes do caractere:
const bigmouth = 'I\'ve got no right to take my place…';
console.log(bigmouth);


// **Números X Strings**
// A forma como os números devem ser exibidos é bastante definida,
// então o navegador converte automaticamente o número em uma 
// string e concatena as duas:
const name3 = "Front ";
const number = 242;
console.log(`${name3}${number}`); // "Front 242"

// Se você tiver uma variável numérica que deseja converter em uma
// string ou uma variável de string que deseja converter em um
// número, poderá usar as duas construções a seguir:

// A função Number() converte qualquer coisa passada para ela em um
// número, se possível:
const myString = "123";
const myNum = Number(myString);
console.log(typeof myNum);
// number

// Por outro lado, a função String(.) converte seu argumento em uma
// string:
const myNum2 = 123;
const myString2 = String(myNum2);
console.log(typeof myString2);
// string
