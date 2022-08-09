/* Sphere
* Make a program that calculates and shows the volume of a sphere being provided the value of its radius (R). 
* The formula to calculate the volume is: (4/3) * pi * R3. Consider (assign) for pi the value 3.14159.

* Tip: Use (4/3.0) or (4.0/3) in your formula, because some languages (including C++) assume that the division's 
* result between two integers is another integer. 

*Input
* The input contains a value of floating point (double precision).

*Output
* The output must be a message "VOLUME" with a space before and after the equal signal. 
* The value must be presented with 3 digits after the decimal point.
*/

/* Esfera
* Faça um programa que receba o valor do Raio (R) de uma esfera e calcule e apresente o seu volume. 
* A fórmula para calcular o volume é: (4/3) * pi * R3. Levando em conta que PI = 3,14159.

* Dica: Use (4/3.0) ou (4.0/3) em sua fórmula, pois algumas linguagens (incluindo C++) assume que o resultado da 
* divisão entre dois inteiros é outro inteiro. 

*Entrada
* A entrada será um valor ponto flutuante do tipo double.

*Saída
* A saída deve ser uma mensagem "VOLUME" com um espaço em branco antes e depois do sinal de igual.
* O valor deve ser exibido com 3 casas decimais após a vírgula.
*/

/*CODE AREA(ÁREA DE CÓDIGO)*/
var R = 3;//Radius (Raio)
var PI = 3.14159;

console.log(`VOLUME = ${((4.0/3) * PI * Math.pow(R, 3)).toFixed(3)}`);