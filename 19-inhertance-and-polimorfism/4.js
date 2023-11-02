// inherit methods

class Person {
    age = null;
    name = null;
    logPersonInfo = function () {
        console.log(this.name + " " + this.age + " éves.")
    }
}

class Student extends Person {
    favoriteSubject = null;
    logStudentInfo = function () {
        console.log(this.name + " " + this.age + " éves és a kedvenc tárgya: " + this.favoriteSubject);
    }
}

const person = new Person();
person.age = 31;
person.name = "Bence";
person.logPersonInfo();

const student = new Student();
student.age = 11;
student.name = "Sanyika";
student.favoriteSubject = "matek";
student.logStudentInfo();
student.logPersonInfo();