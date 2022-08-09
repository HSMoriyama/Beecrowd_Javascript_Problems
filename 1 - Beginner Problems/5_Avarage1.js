/* Avarage 1
* Read two floating points' values of double precision A and B, corresponding to two student's grades. 
* After this, calculate the student's average, considering that grade A has weight 3.5 and B has weight 7.5. 
* Each grade can be from zero to ten, always with one digit after the decimal point.

Input
* The input file contains 2 floating points' values with one digit after the decimal point.

Output
* Print the message "MEDIA"(average in Portuguese) and the student's average according to the following example, 
* with 5 digits after the decimal point and with a blank space before and after the equal signal.
*/

/* Média 1
* Faça a leitura dos valores A e B do tipo ponto flutuante (double), que correspondem as notas de um estudante. 
* Após isso, calcule a média do estudante, considerando que a nota A tem peso 3,5 e a nota B tem peso 7,5. 
* Cada nota pode variar de 0 a 10, sempre com apenas 1 casa decimal após a vírgula.

*Entrada
* A entrada será 2 valores do tipo ponto flutuante, com 1 casa decimal após a vírgula.

*Saída
* Imprima a mensagem "MEDIA" e a média do estudante, de acordo com o seguinte exemplo,
* com 5 casas decimais após a vírgula e com espaço em branco antes e depois do sinal de igual.
*/

/*CODE AREA(ÁREA DE CÓDIGO)*/
var A = 7.5;
var gradeA_Weight = 3.5;

var B = 6.0;
var gradeB_Weight = 7.5;

var media = ((A * gradeA_Weight) + (B * gradeB_Weight))/2;

console.log(`MEDIA = ${media.toFixed(5)}`);