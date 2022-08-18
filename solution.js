//1.

orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 }
];

function totalOfOrders(orders)
{
  return orders.reduce((total, object) => total + object.amount, 0);
}
console.log(totalOfOrders(orders));
//2.
function incrementbyOne(arr) {
  const result = arr.map((item) => item + 1);
  return result;
}
const arrayOfNumbers = [3, 45, 6, 56, 7, 9];
console.log(incrementbyOne(arrayOfNumbers));
// 3.
function filterEvens(arr) {
  const result = arr.filter((item, i) => {
    //console.log(item);
    if (item % 2 === 0) {
      return item;
    }
  });
  return result;
}
console.log(filterEvens([1, 2, 3, 11, 12, 13]));
console.log(filterEvens([22, 2, 31, 110, 6, 13]));
//4.
const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];
function filterFriends(arr, str) {
  const result = arr
    .filter((item, i) => item.includes(str))
    .map((item) => item[0].toUpperCase() + item.slice(1));
  return result;
}
console.log(filterFriends(friends, "ka"));
console.log(filterFriends(friends, "e"));
//5.
function sum(arr) {
  const result = arr.reduce((acc, item) => (acc += item), 0);
  return result;
}
console.log(sum([1, 2, 3, 4, 5]));
console.log(sum([6, 7, 7]));
//6. 
function squareRoot(arr) {
  const result = arr.map((item) => Math.sqrt(item));
  return result;
}
