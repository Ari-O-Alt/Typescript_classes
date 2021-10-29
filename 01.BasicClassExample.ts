// We use the "class keyword to declare a class"
// A class can have fiels, methods, getters and setters
// A class has a constructor - the function which is called when crating an instance of the class
// The constructor can be explicitly specified and it it's ommited, one if automatically provided

class RandomWriting {
  // Fields
  _name: string;
  _age: number;

  // Constructor
  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }

  // Method
  write(): void {
    console.log(
      `Hi, my name is ${this._name} and I am ${this._name} years old. Happy to be here!`
    );
  }
}

// Creating instances of the class is done using the "new" keyword
const example1 = new RandomWriting("Alan", 25);
const example2 = new RandomWriting("Elena", 47);

// Accesing fields and methods on the instances can be done using the dot notation
example1.write(); // returns "Hi, my name is Alan and I am 25 years old. Happy to be here!"
console.log(example2._name); // returns "Elena"

// A class with no explicit constructor
class NoConstructorClass {
  // Method
  write(): void {
    console.log(`Something`);
  }
}

const example3 = new NoConstructorClass();
example3.write(); // returns "Something"
