var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
var result = input.map(function(anObject, i) {
  return Math.sqrt((Math.pow(input[i].x,2) + Math.pow(input[i].y,2)));
});

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);

// Math.pow(x,2) + Math.pow(y,2);