//Abstraction - Hiding Implementation Details

class Vehicle {
  constructor() {
    if (this.constructor === Vehicle)
      throw new Error("Abstract class can't be instantiated directly.");
  }
  //Abstract Method (must be implemented by subclasses)
  accelerate() {
    throw new Error("Method 'accelerate()' must be implemented.");
  }
  //Concrete Method - common for all
  brake() {
    console.log("This vehicle is braking.");
  }
  startEngine() {
    console.log("This engine has started.");
  }
}

class Car extends Vehicle {
  accelerate() {
    console.log("The car is accelerating.");
  }
  brake() {
    console.log("The car is braking");
  }
}

const myCar = new Car();
myCar.startEngine();
myCar.accelerate();
myCar.brake();
