// ENCAPSULATION - Hiding Data with Getters and Setters

class Employee {
  constructor() {
    this.id = null;
    this.name = null;
  }
  //Setters - control how data is assigned
  setId(id) {
    this.id = id;
  }
  setName(name) {
    this.name = name;
  }

  //Getters - controlled access to data

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }
}
const employee = new Employee();
//Setting values via setters
employee.setId(101);
employee.setName("Geek");

//Accessing via getters
console.log("Employee ID : " + employee.getId());
console.log("Employee Name : " + employee.getName());
