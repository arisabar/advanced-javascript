//todo ========= Storing Functions in variable

function add(a, b) {
  return a + b;
}

let sum = add;

// let result = add(10, 20);
// let result = sum(10, 20);

//todo ========== Passing a Function to another function =======

function average(a, b, fn) {
  return fn(a, b) / 2;
}

let result = average(10, 20, sum);

console.log(result);

//todo ========== Returning functions from functions =======

function compareBy(propertyName) {
  return function (a, b) {
    let x = a[propertyName],
      y = b[propertyName];

    if (x > y) {
      return 1;
    } else if (x < y) {
      return -1;
    } else {
      0;
    }
  };
}

let products = [
  { name: "iPhone", price: 900 },
  { name: "Samsung Galaxy", price: 850 },
  { name: "Sony Xperia", price: 700 },
];

//sort products by name
console.log("Products sorted by name:");
products.sort(compareBy("name"));

console.table(products);

//sort products by price
console.log("Products sorted by price:");
products.sort(compareBy("price"));

console.table(products);

//todo ========== More example =======

function cmToIn(length) {
  return length / 2.54;
}

function inToCm(length) {
  return length * 2.54;
}

function convert(fn, length) {
  return fn(length);
}

let inches = convert(cmToIn, 10);
console.log(`converter 10 cm to inches =`, inches);

let cm = convert(inToCm, 10);
console.log(`converter 10 inches to cm =`, cm);
