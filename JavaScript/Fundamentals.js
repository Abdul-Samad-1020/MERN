// variable
var samad = "name";
samad = "Full name ";
console.log(samad);
let name = "samadA";
name ="samadB";

// constant

const pi = 3.14;
pi =  7.4;

// data types

let num = 10;
let str = "hello";
let bool = true;
let und = undefined;
let nul = null;

// array

let arr = [1,2,3,4,5];
console.log(arr);

// object
    let Person = {
        name: "John",
        age: 30,
        city: "New York"
    }
    console.log(Person.city);

    // function
    function greet(name) {
        console.log("Hello " + name);
    }
    greet("John");

    // arrow function
    const greet2 = (name) => {
        console.log("Hello " + name);
    }
    greet2("John");

    //operator
    let x = 10;
    let y = 5;
    console.log(x + y);
    console.log(x - y);
    console.log(x * y);
    console.log(x / y);
    console.log(x % y);

    // if else
    let z = 10;
    if(z > 5) {
        console.log("z is greater than 5");
    } else {
        console.log("z is less than or equal to 5");
    }
    // switch
    let color = "red";
    switch(color) {
        case "red":
            console.log("Color is red");
            break;
        case "blue":
            console.log("Color is blue");
            break;
        default:
            console.log("Color is not red or blue");
    }

    // loop
    for(let i = 0; i < 10; i++) {
        console.log(i);
    }
    let fruits = ["apple", "banana", "orange"];
    for(let i = 0; i < fruits.length; i++) {
        console.log(fruits[i]);
    }
    let sum = 0;
    for(let i = 0; i <= 10; i++) {
        sum += i;
    }
    console.log(sum);

    // while loop
    let j = 0;
    while(j < 10) {
        console.log(j);
        j++;
    }

    // do while loop
    let k = 0;
    do {
        console.log(k);
        k++;
    } while(k < 10);

    // function
    function add(a, b) {
        return a + b;
    }
    console.log(add(5, 7));

    // arrow function
    const multiply = (a, b) => {
        return a * b;
    }
    console.log(multiply(5, 7));

    // constructor function
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.getDetails = function() {
            return `${this.make} ${this.model} ${this.year}`;
        }
    }
    let myCar = new Car("Toyota", "Camry", 2020);
    console.log(myCar.getDetails());

    // prototype function
    Car.prototype.getMileage = function() {
        return `${this.make} ${this.model} has a mileage of 15,000 km`;
    }
    console.log(myCar.getMileage());


    // class
    class Animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        greet() {
            return `Hello, my name is ${this.name} and I am ${this.age} years old`;
        }
    }
    let myAnimal = new Animal("Lion", 10);
    console.log(myAnimal.greet());

    // inheritance
    class Dog extends Animal {
        bark() {
            return `${this.name} barks loudly`;
        }
    }
    let myDog = new Dog("Max", 5);
    console.log(myDog.greet());
    console.log(myDog.bark());

    // async/await
    async function fetchData() {
        try {
            let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
            let data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error:', error);
        }
    }
    fetchData();

    // promise
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));

// Output:

