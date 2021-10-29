// We use the "class keyword to declare a class"

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

const example1 = new RandomWriting("Alan", 25);
example1.write(); // returns ""Hi, my name is Alan and I am 25 years old. Happy to be here!""
