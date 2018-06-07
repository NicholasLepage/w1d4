// var myarray=[10, 2, 5, 1, 9];

// myarray.sort(function(a,b){
//       return a - b;
// });

// console.log(myarray);

var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

students.sort(function(a, b) {
  var nameA = a.name.toLowerCase(); // ignore upper and lowercase
  var nameB = b.name.toLowerCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  if (nameA == nameB) {
    return b.age - a.age;
  }
});

console.log(students);