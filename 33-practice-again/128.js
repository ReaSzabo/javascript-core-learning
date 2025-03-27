/* 
Create a Base and Derived Class
Create a Person class with properties name and age.
Create a Student class that extends Person and adds a grade property.
Instantiate a Student object and log its details

Override a Method in a Derived Class
Add a describe() method in Person that returns "Name: [name], Age: [age]".
Override describe() in Student to also include the grade.
Test both methods by creating instances.

Add constructors both both classes.
Person's constructor should have name and age parameters.
Student's constuctor should call super(name, age).

Add a study() method to Student that logs "Student [name] is studying."
Create a Student instance and call study()
*/

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    describe() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }

    describe() {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }

    study() {
        console.log(`Student ${this.name} is studying.`)
    }

}

const student1 = new Student("Máté", 23, 5);
student1.study();
student1.describe();

console.log(student1);