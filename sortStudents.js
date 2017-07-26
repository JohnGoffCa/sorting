var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];
students.sort((first, second) => {
  if (first.name.toLowerCase() < second.name.toLowerCase()) return -1
  if (first.name.toLowerCase() > second.name.toLowerCase()) return 1
  return first.age - second.age;
});
console.log(students)
