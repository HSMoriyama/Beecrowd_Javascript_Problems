/* Avarage 2
* Read three values (variables A, B and C), which are the three student's grades. Then, calculate the average, 
* considering that grade A has weight 2, grade B has weight 3 and the grade C has weight 5. 
* Consider that each grade can go from 0 to 10.0, always with one decimal place.

*Input
* The input file contains 3 values of floating points (double) with one digit after the decimal point.

*Output
* Print the message "MEDIA"(average in Portuguese) and the student's average according to the following example, 
* with a blank space before and after the equal signal.
*/

/* Media 2
* Faça a leitura de três variáveis A, B e C, que correspondem a 3 notas de um estudante. Então calcule a média, 
* levando em conta que a nota A tem peso 2, nota B tem peso 3 e nota C tem peso 5. 
* Cada nota pode variar de 0 a 10,0, sempre com 1 casa decimal após a vírgula.

*Entrada
* A entrada será 3 valores do tipo ponto flutuante (double) com 1 casa decimal após a vírgula.

*Output
* Imprima a menssagem "MEDIA" e a média do estudante de acordo com o exemplo a seguir, 
* com um espaço em branco antes e depois do sinal de igual.
*/

var A = 7.3;
var gradeA_weight = 2;

var B = 3.0;
var gradeB_weight = 3;

var C = 5.5;
var gradeC_weight = 5;

var media = ((A * gradeA_weight) + (B * gradeB_weight) + (C * gradeC_weight))/3;

console.log(`MEDIA = ${media}`);