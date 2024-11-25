/*
HOMEWORK:

Write a program to calculate the change to be dispensed from a vending machine. 
The machine accepts a single dollar bill. The items in the machine cost between 5 
cents and 1 dollar, in 5-cent increments (5, 10, 20, 25, 30, 35, . . . 90, 95, or 100). 

Example:
Price of item: 35 cents
Display: 
You bought an item for 35 cents and gave me a dollar, so your change is: 
2 quarter(s)
1 dime(s)
1 nickel(s)
*/
/* Variables */
// one dollar = 100
// itemPrice = ?
// quarter
// dime
// nickle
// diference between dollar and item price (100 - 35 = 65) *let

// find all the let quarter (65/25 = 2)  * float -> Math.floor(65/25)
//25 * 2 = 50, 50 - 65 = 15;
// removed the difference (65 % 25 = 15) *diference between dollar and item price or create a new variable

//find all the dimes (15/10 = 1) * float 
// removed the difference (15%10 = 5) *diference between dollar and item price or create a new variable

//find all the nickles ( 5/ 5 =1)
// if not nickles = "0 nickles"