// Inheritance - Reusing Parent Functionality

class Animal {
  eat() {
    console.log("Animal is eating...");
  }
  sleep() {
    console.log("Animal is sleeping...");
  }
}
class Dog extends Animal {
  bark() {
    console.log("Dog is barking!");
  }
}

const myDog = new Dog();
myDog.eat(); // Inherited Method
myDog.sleep(); // Inherited Method
myDog.bark(); // Child-specific Method
