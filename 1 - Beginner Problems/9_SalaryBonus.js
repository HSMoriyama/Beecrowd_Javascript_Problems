/* Salary Bonus
* Make a program that reads a seller's name, his/her fixed salary and the sale's total made by 
* himself/herself in the month (in money). Considering that this seller receives 15% over all 
* products sold, write the final salary (total) of this seller at the end of the month , with two decimal places.

*Input
* The input file contains a text (employee's name), and two double precision values, that 
* are the seller's salary and the total value sold by him/her.

*Output
* Print the seller's total salary.
*/

/* Salario mais Bonus
* Faça um programa que receba o nome de um vendedor, seu sálario fixo e o total em vendas feito por ele  
* no mês. Levando em conta que este funcionário recebe 15% de bonús sobre os produtos vendidos,
* imprima o sálario que este vendedor receberá ao fim do mês com 2 casas decimais após a vírgula. 

*Entrada
* A entrada será, um dado de tipo textual (o nome do funcionário), e 2 valores do tipo double, que 
* são o sálario do vendedor e o valor total em vendas feitas por ele. 

*Sáida
* Imprima o sálario total do vendedor.
*/

/*CODE AREA(ÁREA DE CÓDIGO)*/
var sellerName = 'Higor Souza';
var salary = 1320.50;
var salesMade = 5454.75;

console.log("TOTAL = U$ " + ((salesMade * 0.15) + salary).toFixed(2));