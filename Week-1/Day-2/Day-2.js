/* 
  Our goal today is to create a function called calcTotal. 
    * calcTotal will take in two arguments, an array of objects and a tax amount.
    * Calculate the total price of items in the array (pay attention to quantity)
    * Return the total including taxes rounded to two decimal.
*/

function precisionRound(number, precision) {
  var factor = Math.pow(10, precision);
  return Math.round(number * factor) / factor;
}

function calcTotal(arr, taxRate) {
  let price = arr.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);
  let taxPrice = price * taxRate;
  let total = price + taxPrice;
  return precisionRound(total, 2);
}

let cart = [
  {
    id: 1,
    product: "Snapple Raspberry Tea",
    price: 16.82,
    quantity: 2
  },
  {
    id: 2,
    product: "Wine - Peller Estates Late",
    price: 15.07,
    quantity: 3
  },
  {
    id: 3,
    product: "Isomalt",
    price: 6.42,
    quantity: 2
  },
  {
    id: 4,
    product: "Green Scrubbie Pad H.duty",
    price: 15.33,
    quantity: 3
  },
  {
    id: 5,
    product: "Soup Campbells Split Pea And Ham",
    price: 4.03,
    quantity: 3
  }
];

var tax = 0.07;
var test = calcTotal(cart, tax);

const { should } = require("chai");
should();
cart.should.be.a("array");
cart.length.should.equal(5);
test.should.be.a("number");
test.should.equal(160.25);

console.log("all tests passing!");
