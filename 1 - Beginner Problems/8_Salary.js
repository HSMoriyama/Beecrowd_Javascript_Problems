/*Salary
* Write a program that reads an employee's number, his/her worked hours number in a 
* month and the amount he received per hour. Print the employee's number and salary 
* that he/she will receive at end of the month, with two decimal places.

* Don’t forget the space before and after the equal signal and before and after the U$.

*Input
* The input file contains 2 integer numbers and 1 value of floating point, representing the number, worked 
* hours amount and the amount the employee receives per worked hour.

*Output
* Print the number and the employee's salary, according to the given example, with a blank space before and 
* after the equal signal.
*/

/*Sálario
* Desenvolva um programa que reçeba o número de um funcionário, suas horas trabalhadas 
* no mês e quanto recebe por hora. Imprima o número do funcionário e o sálario 
* que ele receberá ao fim do mês, com 2 casas decimais após a vírgula.

* Não esqueça do espaço antes e depois do sinal de igual e depois do simbolo U$.

*Entrada
* A entrada será 2 números do tipo int e 1 valor do tipo ponto flutuante, representando o número do funcionário,
* quantidade de horas trabalhadas e o valor que o funcionário recebe por horas trabalhadas.

*Saída
* Imprima o número e o sálario do funcionário, de acordo com o exemplo, com um espaço em branco antes e depois do 
* sinal de igual.
*/

/*CODE AREA(ÁREA DE CÓDIGO)*/
var employeeNumber = 55;
var workedHoursPerMonth = 240;
var amountPerHour = 5.50;
var salary = amountPerHour * workedHoursPerMonth;

console.log(`Employee Number = ` + employeeNumber    
          + `\nSalary = U$ ` + salary.toFixed(2));