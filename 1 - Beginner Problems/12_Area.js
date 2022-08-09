/* Area
* Make a program that reads three floating point values: A, B and C. Then, calculate and show:
* a) the area of the rectangled triangle that has base A and height C.
* b) the area of the radius's circle C. (pi = 3.14159)
* c) the area of the trapezium which has A and B by base, and C by height.
* d) the area of ​​the square that has side B.
* e) the area of the rectangle that has sides A and B.

*Input
* The input file contains three double values with one digit after the decimal point.

*Output
* The output file must contain 5 lines of data. Each line corresponds to one of the areas described 
* above, always with a corresponding message (in Portuguese) and one space between the two points and the value. 
* The value calculated must be presented with 3 digits after the decimal point.
*/

/* Área
* Faça um programa que reçeba 3 valores ponto flutuante: A, B e C. Então calcule e exiba:
* a) a área de um triângulo retângulo que tem base A e altura C.
* b) a área do raio de um circulo C. (pi = 3.14159)
* c) a área de um trapézio que possui A e B como base, e C como altura.
* d) a área de um quadrado que possui lado B.
* e) a área de um retângulo que tem lados A e B.

*Entrada
* A entrada será 3 valores do tipo double, com uma vasa decimal após a vírgula.

*Saída
* A saída deverá conter 5 linhas de dados. Cada linha corresponde a uma das áreas descritas 
* acima, sempre com uma mensagem correspondente (em portugues) e espaço entre dois pontos (:) e o valor. 
* O valor calculado deve ser exibido com 3 casas decimais após a vírgula.
*/

/*CODE AREA(ÁREA DE CÓDIGO)*/

var A = 3.0;
var B = 4.0;
var C = 5.2;
var PI = 3.14159

// a) the area of the rectangled triangle that has base A and height C. Area = (height * width)/2
console.log(`TRIâNGULO: ${((C * A)/2).toFixed(3)}`);

// b) the area of the radius's circle C. (pi = 3.14159) Area = PI * R2(radius squared)
console.log(`CÍRCULO: ${(PI * Math.pow(C, 2)).toFixed(3)}`);

// c) the area of the trapezium which has A and B by base, and C by height.  Area = ((a(top) + b(base))/2) * h
console.log(`TRAPÉZIO: ${(((A + B)/2) * C).toFixed(3)}`);

// d) the area of ​​the square that has side B. Area = height * width
console.log(`QUADRADO: ${(B * B).toFixed(3)}`);

// e) the area of the rectangle that has sides A and B. Area = height * width
console.log(`RETâNGULO: ${(A * B).toFixed(3)}`);