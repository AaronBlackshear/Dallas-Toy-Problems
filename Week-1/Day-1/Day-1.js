/* 
  Our goal today is to create a function called removeItem. 
    * removeItem will take in two arguments, an array and an id. 
    * Loop through the array to see if there is an item whose id matches the passed in id.
    * If the object exists, remove it from the array. 
    * Either way, return the array when complete.
*/

function removeItem(arr, id) {
  for(let i = arr.length; i > 0; i--) {
    if(arr[i].id == id){
      arr.splice(i, 1);
    }
  }
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

var id = 5;
var test = removeItem(cart, id);

const { should } = require("chai");
should();
cart.should.be.a("array");
cart.length.should.equal(4);
test.should.be.a("array");
test.length.should.equal(4);
(test.find(c => c.id === id) !== undefined).should.equal(false);

console.log("all tests passing!");
