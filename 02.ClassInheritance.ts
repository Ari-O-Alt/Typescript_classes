// TypeScript supports the concept of Inheritance. Inheritance is the ability of a program to create new classes from an existing class
// The class that is extended to create newer classes is called the parent class/super class
// The newly created classes are called the child/sub classes

// Parent/ super class
class Random {
  _writing: string;

  constructor(writing: string) {
    this._writing = writing;
  }

  printMessage() {
    console.log(`The message is ${this._writing}.`);
  }
}

// Child. sub class
// To inherit for a super class we need to use the "extends" keyword
class RandomMessageOnACup extends Random {
  // All sub classes need a parameterized constructor
  constructor(writing: string) {
    super(writing);
  }
}

const randomMessageCup1 = new RandomMessageOnACup("I am a cup!");
console.log(randomMessageCup1._writing); // returns "I am a cup!"
console.log(randomMessageCup1.printMessage()); // returns "The message is I am a cup!"
