/* Area of a circle calculation
* The formula to calculate the area of a circumference is defined as A = π . R2.
* Considering to this problem that π = 3.14159:

* Calculate the area using the formula given in the problem description.

*Input
* The input contains a value of floating point (double precision), that is the
* variable R.

*Output
* Present the message "A=" followed by the value of the variable with four places 
* after the decimal point.
*/

/* Cálculo da área de um círculo
* A fórmula para o cálculo da área de uma circunferência é dada por A = π . R2.
* Levando em consideração π = 3.14159:

* Calcule a área usando a fórmula dada no enunciado.

*Entrada
* A entrada é do tipo ponto flutuante (double), qual é a variável R.

*Sáida
* Imprima a mensagem da seguinte forma "A=" em seguida o valor da variável com 
* 4 casas decimais ápos a vírgula.
*/

/*CODE AREA(ÁREA DE CÓDIGO)*/

var PI = 3.14159;
var raio = 2;
var area = PI * (Math.pow(raio, 2));

console.log(`A= ${area.toFixed(4)}`);