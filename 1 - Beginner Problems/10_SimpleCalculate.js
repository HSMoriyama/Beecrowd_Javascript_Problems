/* Simple Calculate
* In this problem, the task is to read a code of a product 1, the number of units of product 1, 
* the price for one unit of product 1, the code of a product 2, the number of units of product 2 
* and the price for one unit of product 2. After this, calculate and show the amount to be paid.

*Input
* The input file contains two lines of data. In each line there will be 3 values: two integers 
* and a floating value with 2 digits after the decimal point.

*Output
* The output file must be a message like the following example where "Valor a pagar" means Value 
* to Pay. Remember the space after ":" and after "R$" symbol. The value must be presented with 2 
* digits after the point.
*/

/* Calculo Simples
* Neste problema, a tarefa é receber o código, a quantidade e o preço por únidade do produto 1 e do
* produto 2. Após isto, calcule e exiba o valor a ser págo.

*Entrada
* A entrada será 2 valores do tipo int e um valor do tipo ponto flutuante, com 2 casas decimais após a
* vírgula.

*Sáida
* A sáida deve ser uma mensagem como no exemplo a seguir, "Valor a pagar". Nâo esqueça do espaço depois dos
* simbolos ":" e depois de "R$". O valor deve ser mostrado com 2 casas decimais após a vírgula.
*/

var product1Code = 15;
var product1Units = 5;
var product1PricePerUnit = 5.35;

var product2Code = 10;
var product2Units = 20;
var product2PricePerUnit = 1.75;

console.log("Valor a pagar: R$ " 
            + ((product1Units * product1PricePerUnit) + (product2Units * product2PricePerUnit)).toFixed(2));