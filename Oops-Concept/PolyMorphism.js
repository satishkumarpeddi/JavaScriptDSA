//POLYMORPHISM - Same Method, Different Behavior

class Calculator {
  //Overloaded - like behavior using argument checks

  add(a, b, c) {
    if (arguments.length === 2) {
      return a + b; //Two-Parameter version
    } else if (arguments.length === 3) {
      return a + b + c; // Three-Parameter version
    }
  }
}

const cal = new Calculator();
console.log("Sum of 5 and 3 :", cal.add(5, 3));
console.log("Sum of 4, 6, and 2:", cal.add(4, 6, 2));
