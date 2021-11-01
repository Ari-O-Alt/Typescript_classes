// A class can implement one or multiple interfaces
// To implement an interface means that a class must contain all the properties and methods of an interface
// To implement multiple interfaces means that a class must contain all properties and methods on all implemented interfaces

// Interface
interface GenericInterface {
  name: string;
  age: number;
  returnDate: () => Date;
}

// Interface
interface AnotherGenericInterface {
  greetingMessage: string;
}

// Class that implements one interface
class GenericClass implements GenericInterface {
  name: string;
  age: number;
  returnDate() {
    return new Date();
  }

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

// Instance and member access
const genericClass1 = new GenericClass("Gen1", 45);
console.log(genericClass1.name); // returns "Gen1"
console.log(genericClass1.returnDate()); // returns today's date in the format of Date: "2021-11-01T08:11:39.789Z"

// Class that implements two interfaces
class ImplementMultipleInterface1
  implements GenericClass, AnotherGenericInterface
{
  name: string;
  age: number;
  returnDate() {
    return new Date();
  }
  greetingMessage: string;

  constructor(name: string, age: number, greetingMessage: string) {
    this.name = name;
    this.age = age;
    this.greetingMessage = greetingMessage;
  }
}

// Instances and member access
const genericClass2 = new ImplementMultipleInterface1(
  "Gen2",
  78,
  "This is a message"
);
console.log(genericClass2.returnDate()); // returns today's date in the format of Date: "2021-11-01T08:11:39.789Z"
console.log(genericClass2.greetingMessage); // returns "This is a message"

// The class bellow would throw an error since ImplementMultipleInterface2 doesn't contain all properties on GenericClass and AnotherGenericInterface (greetingMessage is missing)
// Error: 'greetingMessage' is declared here.

/* class ImplementMultipleInterface2
  implements GenericClass, AnotherGenericInterface
{
  name: string;
  age: number;
  returnDate() {
    return new Date();
  }
} */
