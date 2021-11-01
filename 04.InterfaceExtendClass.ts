// Interfaces can extand classes to represent types

// Interface
interface IGenericInterface {
  name: string;
}

// Class
class GenericClass {
  age: number;
}

// Now this interface will have two properties: "name" and "age"
interface IGenericInterface extends GenericClass {}

const newObj1: IGenericInterface = { name: "Lila", age: 45 }; // correct, contains both properties, name and age
const newObj2: IGenericInterface = { age: 28 }; // Error: Property 'name' is missing in type '{ age: number; }' but required in type 'IGenericInterface'.
