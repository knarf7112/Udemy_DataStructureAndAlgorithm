// object
let Ken = {
  name: 'Ken Wang',
  age: 40,
  married: true,
  sayHi() {
    console.log('Ken says hi to you.')
  }
};

console.log(Ken.name);
console.log(Ken['name']);
console.log(Ken.sayHi());