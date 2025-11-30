/**
 * @author Makro Skorupan
 * @version 1.0.0
 * @date 2025-11-30
 * @fileoverview This program calculates how many years it takes for an initial
 * investment of $10,000 to grow to $100,000 at an annual interest rate of 5%.
 */

const startsString: string = prompt("Enter the starting bank account amount: ") ||
  "0";
const rateString: string =
  prompt("Enter the yearly interest rate (as a percentage): ") || "0";
const neededString: string =
  prompt("Enter the amount needed for post-secondary education: ") || "0";

let amount: number = parseFloat(startsString);
const rate: number = parseFloat(rateString);
const needed: number = parseFloat(neededString);

let years: number = 0;

while (amount < needed) {
  amount = amount + (amount * (rate / 100));
  years++;
}

console.log(
  "It will take " + years +
    " years for the starting bank account to reach the required amount for post-secondary education",
);
console.log("\nDone.");
