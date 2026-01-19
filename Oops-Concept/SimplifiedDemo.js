// Object Oriented Programming In JavaScript

// Class and Objects

class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  takeExam() {
    console.log(`${this.name} is taking an exam.`);
  }
  takeLeave() {
    console.log(`${this.name} is taking leave.`);
  }
}

const StudentA = new Student("Alice", 20);
StudentA.takeExam();
StudentA.takeLeave();
const StudentB = new Student("Bob", 22);
StudentB.takeExam();
StudentB.takeLeave();
